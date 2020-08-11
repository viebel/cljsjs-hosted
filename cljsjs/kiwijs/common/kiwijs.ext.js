/**********************************************************************
 * Extern for kiwi
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var kiwi = {
  "Constraint": {
    "Compare": function () {}
  },
  "Expression": function () {},
  "Operator": {
    "0": {},
    "1": {},
    "2": {},
    "Eq": {},
    "Ge": {},
    "Le": {}
  },
  "Solver": function () {},
  "Strength": {
    "clip": function () {},
    "create": function () {},
    "medium": {},
    "required": {},
    "strong": {},
    "weak": {}
  },
  "Variable": {
    "Compare": function () {}
  }
};
kiwi.Constraint.prototype = {
  "expression": function () {},
  "id": function () {},
  "op": function () {},
  "strength": function () {},
  "toString": function () {}
};
kiwi.Expression.prototype = {
  "constant": function () {},
  "divide": function () {},
  "isConstant": function () {},
  "minus": function () {},
  "multiply": function () {},
  "plus": function () {},
  "terms": function () {},
  "toString": function () {},
  "value": function () {}
};
kiwi.Solver.prototype = {
  "_addWithArtificialVariable": function () {},
  "_anyPivotableSymbol": function () {},
  "_chooseSubject": function () {},
  "_createRow": function () {},
  "_dualOptimize": function () {},
  "_getDualEnteringSymbol": function () {},
  "_getEnteringSymbol": function () {},
  "_getLeavingSymbol": function () {},
  "_getMarkerLeavingSymbol": function () {},
  "_getVarSymbol": function () {},
  "_makeSymbol": function () {},
  "_optimize": function () {},
  "_removeConstraintEffects": function () {},
  "_removeMarkerEffects": function () {},
  "_substitute": function () {},
  "addConstraint": function () {},
  "addEditVariable": function () {},
  "createConstraint": function () {},
  "hasConstraint": function () {},
  "hasEditVariable": function () {},
  "removeConstraint": function () {},
  "removeEditVariable": function () {},
  "suggestValue": function () {},
  "updateVariables": function () {}
};
kiwi.Variable.prototype = {
  "context": function () {},
  "divide": function () {},
  "id": function () {},
  "minus": function () {},
  "multiply": function () {},
  "name": function () {},
  "plus": function () {},
  "setContext": function () {},
  "setName": function () {},
  "setValue": function () {},
  "toJSON": function () {},
  "toString": function () {},
  "value": function () {}
};
/**********************************************************************
 * End Generated Extern for kiwi
/**********************************************************************/