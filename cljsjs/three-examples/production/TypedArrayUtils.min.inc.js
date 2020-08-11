/*
 MIT License <http://www.opensource.org/licenses/mit-license.php>

 Complexity: http://bigocheatsheet.com/ see Quicksort

 Example: 
 points: [x, y, z, x, y, z, x, y, z, ...]
 eleSize: 3 //because of (x, y, z)
 orderElement: 0 //order according to x
 MIT License <http://www.opensource.org/licenses/mit-license.php>

 Requires typed array quicksort

 Example: 
 points: [x, y, z, x, y, z, x, y, z, ...]
 metric: function(a, b){	return Math.pow(a[0] - b[0], 2) +  Math.pow(a[1] - b[1], 2) +  Math.pow(a[2] - b[2], 2); }  //Manhatten distance
 eleSize: 3 //because of (x, y, z)

 Further information (including mathematical properties)
 http://en.wikipedia.org/wiki/Binary_tree
 http://en.wikipedia.org/wiki/K-d_tree

 If you want to further minimize memory usage, remove Node.depth and replace in search algorithm with a traversal to root node (see comments at THREE.TypedArrayUtils.Kdtree.prototype.Node)
*/
THREE.TypedArrayUtils={};
THREE.TypedArrayUtils.quicksortIP=function(b,c,d){for(var h=[],k=-1,g=0,l=b.length/c-1,q=0,a=0,n=0,f=function(d,a){d*=c;a*=c;for(n=0;n<c;n++)q=b[d+n],b[d+n]=b[a+n],b[a+n]=q},e,m,t=new Float32Array(c),r=new Float32Array(c);;)if(25>=l-g){for(m=g+1;m<=l;m++){for(a=0;a<c;a++)t[a]=b[m*c+a];for(e=m-1;e>=g&&b[e*c+d]>t[d];){for(a=0;a<c;a++)b[(e+1)*c+a]=b[e*c+a];e--}for(a=0;a<c;a++)b[(e+1)*c+a]=t[a]}if(-1==k)break;l=h[k--];g=h[k--]}else{a=g+l>>1;e=g+1;m=l;f(a,e);b[g*c+d]>b[l*c+d]&&f(g,l);b[e*c+d]>b[l*c+d]&&
f(e,l);b[g*c+d]>b[e*c+d]&&f(g,e);for(a=0;a<c;a++)r[a]=b[e*c+a];for(;;){do e++;while(b[e*c+d]<r[d]);do m--;while(b[m*c+d]>r[d]);if(m<e)break;f(e,m)}for(a=0;a<c;a++)b[(g+1)*c+a]=b[m*c+a],b[m*c+a]=r[a];l-e+1>=m-g?(h[++k]=e,h[++k]=l,l=m-1):(h[++k]=g,h[++k]=m-1,g=e)}return b};
THREE.TypedArrayUtils.Kdtree=function(b,c,d){function h(b,c,a,n){var f=c%d,e=b.length/d;c>g&&(g=c);if(0===e)return null;if(1===e)return new k.Node(b.subarray(0*d,0*d+d),c,a,n);THREE.TypedArrayUtils.quicksortIP(b,d,f);f=Math.floor(e/2);a=new k.Node(b.subarray(f*d,f*d+d),c,a,f+n);a.left=h(b.subarray(0,f*d),c+1,a,n);a.right=h(b.subarray((f+1)*d,b.length),c+1,a,n+f+1);return a}var k=this,g=0;this.root=h(b,0,null,0);this.getMaxDepth=function(){return g};this.nearest=function(b,g,a){function h(a){var f;
f=a.depth%d;for(var k=c(b,a.obj),p=0,u=[],p=0;p<d;p+=1)u[p]=p===a.depth%d?b[p]:a.obj[p];p=c(u,a.obj);if(null===a.right&&null===a.left){if(e.size()<g||k<e.peek()[1])e.push([a,k]),e.size()>g&&e.pop()}else{f=null===a.right?a.left:null===a.left?a.right:b[f]<a.obj[f]?a.left:a.right;h(f);if(e.size()<g||k<e.peek()[1])e.push([a,k]),e.size()>g&&e.pop();if(e.size()<g||Math.abs(p)<e.peek()[1])a=f===a.left?a.right:a.left,null!==a&&h(a)}}var f,e;e=new THREE.TypedArrayUtils.Kdtree.BinaryHeap(function(a){return-a[1]});
if(a)for(f=0;f<g;f+=1)e.push([null,a]);h(k.root);a=[];for(f=0;f<g;f+=1)e.content[f][0]&&a.push([e.content[f][0],e.content[f][1]]);return a}};THREE.TypedArrayUtils.Kdtree.prototype.Node=function(b,c,d,h){this.obj=b;this.right=this.left=null;this.parent=d;this.depth=c;this.pos=h};THREE.TypedArrayUtils.Kdtree.BinaryHeap=function(b){this.content=[];this.scoreFunction=b};
THREE.TypedArrayUtils.Kdtree.BinaryHeap.prototype={push:function(b){this.content.push(b);this.bubbleUp(this.content.length-1)},pop:function(){var b=this.content[0],c=this.content.pop();0<this.content.length&&(this.content[0]=c,this.sinkDown(0));return b},peek:function(){return this.content[0]},remove:function(b){for(var c=this.content.length,d=0;d<c;d++)if(this.content[d]==b){var h=this.content.pop();d!=c-1&&(this.content[d]=h,this.scoreFunction(h)<this.scoreFunction(b)?this.bubbleUp(d):this.sinkDown(d));
return}throw Error("Node not found.");},size:function(){return this.content.length},bubbleUp:function(b){for(var c=this.content[b];0<b;){var d=Math.floor((b+1)/2)-1,h=this.content[d];if(this.scoreFunction(c)<this.scoreFunction(h))this.content[d]=c,this.content[b]=h,b=d;else break}},sinkDown:function(b){for(var c=this.content.length,d=this.content[b],h=this.scoreFunction(d);;){var k=2*(b+1),g=k-1,l=null;if(g<c){var q=this.scoreFunction(this.content[g]);q<h&&(l=g)}k<c&&this.scoreFunction(this.content[k])<
(null===l?h:q)&&(l=k);if(null!==l)this.content[b]=this.content[l],this.content[l]=d,b=l;else break}}};