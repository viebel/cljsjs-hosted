/**********************************************************************
 * Extern for connect
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var connect = {
  "HttpClient": {
    "_buildQueryStringFromHttpParams": function () {}
  },
  "WebSocketOrderbookChannel": function () {}
};
connect.HttpClient.prototype = {
  "_requestAsync": function () {},
  "getFeesAsync": function () {},
  "getOrderAsync": function () {},
  "getOrderbookAsync": function () {},
  "getOrdersAsync": function () {},
  "getTokenPairsAsync": function () {},
  "submitOrderAsync": function () {}
};
connect.WebSocketOrderbookChannel.prototype = {
  "_getConnection": function () {},
  "_handleWebSocketMessage": function () {},
  "close": function () {},
  "subscribe": function () {}
};
/**********************************************************************
 * End Generated Extern for connect
/**********************************************************************/