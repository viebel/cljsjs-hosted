/*
 * Copyright [2010] [Mark Rijnbeek] 
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under the License 
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and limitations under the License.
 */

goog.provide('kemia.util.BondUtil');
goog.provide('kemia.util.BondUtil.Orders');

goog.require('kemia.model.Atom');
goog.require('kemia.model.PseudoAtom');
goog.require('kemia.model.Bond');


kemia.util.BondUtil = function(){
}

/*
 * Return a bond of the correct subclass given the input arguments.
 * TODO: extend with stereo types.
 */
kemia.util.BondUtil.getBond = function(atom1, atom2, bondOrder){
    bond=null;
    switch (bondOrder) {
        case kemia.util.BondUtil.Orders.SINGLE:
            bond = new kemia.model.Bond(atom1, atom2);
            break;
        case kemia.util.BondUtil.Orders.DOUBLE:
            bond = new kemia.model.Bond(atom1, atom2, 2);
            break;
        case kemia.util.BondUtil.Orders.TRIPLE:
            bond = new kemia.model.Bond(atom1, atom2, 3);
            break;
        case kemia.util.BondUtil.Orders.QUADRUPLE:
            bond = new kemia.model.Bond(atom1, atom2, 4);
            break;
    }
    return bond;
}


/**
 * Bond orders to map to bond type subclasses
 * @enum {number}
 */
kemia.util.BondUtil.Orders = {
        SINGLE :1,
        DOUBLE :2,
        TRIPLE :3,
        QUADRUPLE :4
};
