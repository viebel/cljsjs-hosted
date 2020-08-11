/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function () {\n    window['JsDataverse'] = __webpack_require__(/*! js-dataverse */ \"./node_modules/js-dataverse/dist/index.js\");\n})();\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/js-dataverse/dist/@types/searchOptions.js":
/*!****************************************************************!*\
  !*** ./node_modules/js-dataverse/dist/@types/searchOptions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar SearchType;\n(function (SearchType) {\n    SearchType[\"DATAVERSE\"] = \"dataverse\";\n    SearchType[\"DATASET\"] = \"dataset\";\n    SearchType[\"FILE\"] = \"file\";\n})(SearchType = exports.SearchType || (exports.SearchType = {}));\nvar SearchSortAttribute;\n(function (SearchSortAttribute) {\n    SearchSortAttribute[\"NAME\"] = \"name\";\n    SearchSortAttribute[\"DATE\"] = \"date\";\n})(SearchSortAttribute = exports.SearchSortAttribute || (exports.SearchSortAttribute = {}));\nvar SearchOrder;\n(function (SearchOrder) {\n    SearchOrder[\"ASC\"] = \"asc\";\n    SearchOrder[\"DESC\"] = \"desc\";\n})(SearchOrder = exports.SearchOrder || (exports.SearchOrder = {}));\n//# sourceMappingURL=searchOptions.js.map\n\n//# sourceURL=webpack:///./node_modules/js-dataverse/dist/@types/searchOptions.js?");

/***/ }),

/***/ "./node_modules/js-dataverse/dist/dataverseClient.js":
/*!***********************************************************!*\
  !*** ./node_modules/js-dataverse/dist/dataverseClient.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar dataverseException_1 = __webpack_require__(/*! ./exceptions/dataverseException */ \"./node_modules/js-dataverse/dist/exceptions/dataverseException.js\");\nvar DataverseClient = /** @class */ (function () {\n    function DataverseClient(host, apiToken) {\n        this.host = host;\n        this.apiToken = apiToken;\n    }\n    DataverseClient.prototype.getDataverseInformation = function (dataverseAlias) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/dataverses/\" + dataverseAlias;\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.listDatasets = function (dataverseAlias) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/dataverses/\" + dataverseAlias + \"/contents\";\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.addDataset = function (dataverseAlias, payload) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/dataverses/\" + dataverseAlias + \"/datasets\";\n                return [2 /*return*/, this.postRequest(url, payload)];\n            });\n        });\n    };\n    DataverseClient.prototype.search = function (options) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url, requestOptions;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/search\";\n                requestOptions = this.mapSearchOptions(options);\n                return [2 /*return*/, this.getRequest(url, { params: requestOptions })];\n            });\n        });\n    };\n    DataverseClient.prototype.getFile = function (fileId) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/access/datafile/\" + fileId;\n                return [2 /*return*/, this.getRequest(url, {\n                        headers: this.getHeaders(),\n                        responseType: 'arraybuffer'\n                    })];\n            });\n        });\n    };\n    DataverseClient.prototype.getFileMetadata = function (fileId, draftVersion) {\n        if (draftVersion === void 0) { draftVersion = false; }\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/files/\" + fileId + \"/metadata/\" + (draftVersion ? 'draft' : '');\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.getLatestDatasetInformation = function (datasetId) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/datasets/\" + datasetId;\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.getDatasetVersions = function (datasetId) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/datasets/\" + datasetId + \"/versions\";\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.getDatasetVersion = function (datasetId, version) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/datasets/\" + datasetId + \"/versions/\" + version;\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.getDatasetThumbnail = function (datasetId) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/datasets/\" + datasetId + \"/thumbnail\";\n                return [2 /*return*/, this.getRequest(url, {\n                        headers: this.getHeaders(),\n                        responseType: 'arraybuffer'\n                    })];\n            });\n        });\n    };\n    DataverseClient.prototype.listDataverseRoleAssignments = function (dataverseAlias) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/dataverses/\" + dataverseAlias + \"/assignments\";\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.listDataverseGroups = function (dataverseId) {\n        return __awaiter(this, void 0, void 0, function () {\n            var url;\n            return __generator(this, function (_a) {\n                url = this.host + \"/api/dataverses/\" + dataverseId + \"/groups\";\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.getMetric = function (datasetId, metricType, yearMonth) {\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                return [2 /*return*/, this.getMetricByCountry(datasetId, metricType, undefined, yearMonth)];\n            });\n        });\n    };\n    DataverseClient.prototype.getMetricByCountry = function (datasetId, metricType, countryCode, yearMonth) {\n        return __awaiter(this, void 0, void 0, function () {\n            var countryQueryParam, url;\n            return __generator(this, function (_a) {\n                countryQueryParam = countryCode ? \"?country=\" + countryCode : '';\n                url = this.host + \"/api/datasets/\" + datasetId + \"/makeDataCount/\" + metricType.toString() + (yearMonth ? '/' + yearMonth : '') + countryQueryParam;\n                return [2 /*return*/, this.getRequest(url)];\n            });\n        });\n    };\n    DataverseClient.prototype.getRequest = function (url, options) {\n        if (options === void 0) { options = { headers: this.getHeaders() }; }\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, axios_1.default.get(url, options).catch(function (error) {\n                            throw new dataverseException_1.DataverseException(error.response.status, error.response.data.message);\n                        })];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    DataverseClient.prototype.postRequest = function (url, data, options) {\n        if (options === void 0) { options = { headers: this.getHeaders() }; }\n        return __awaiter(this, void 0, void 0, function () {\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, axios_1.default.post(url, data, options).catch(function (error) {\n                            throw new dataverseException_1.DataverseException(error.response.status, error.response.data.message);\n                        })];\n                    case 1: return [2 /*return*/, _a.sent()];\n                }\n            });\n        });\n    };\n    DataverseClient.prototype.getHeaders = function () {\n        return {\n            'X-Dataverse-key': this.apiToken ? this.apiToken : ''\n        };\n    };\n    DataverseClient.prototype.mapSearchOptions = function (options) {\n        return {\n            q: options.query,\n            subtree: options.dataverseAlias,\n            start: options.startPosition,\n            type: options.type,\n            sort: options.sortAttribute,\n            order: options.order,\n            'per_page': options.itemsPerPage,\n            'show_entity_ids': options.showEntityIds,\n            'show_relevance': options.showRelevance\n        };\n    };\n    return DataverseClient;\n}());\nexports.DataverseClient = DataverseClient;\n//# sourceMappingURL=dataverseClient.js.map\n\n//# sourceURL=webpack:///./node_modules/js-dataverse/dist/dataverseClient.js?");

/***/ }),

/***/ "./node_modules/js-dataverse/dist/exceptions/dataverseException.js":
/*!*************************************************************************!*\
  !*** ./node_modules/js-dataverse/dist/exceptions/dataverseException.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar DataverseException = /** @class */ (function (_super) {\n    __extends(DataverseException, _super);\n    function DataverseException(errorCode, message) {\n        var _this = _super.call(this, message) || this;\n        _this.errorCode = errorCode;\n        return _this;\n    }\n    return DataverseException;\n}(Error));\nexports.DataverseException = DataverseException;\n//# sourceMappingURL=dataverseException.js.map\n\n//# sourceURL=webpack:///./node_modules/js-dataverse/dist/exceptions/dataverseException.js?");

/***/ }),

/***/ "./node_modules/js-dataverse/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/js-dataverse/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__export(__webpack_require__(/*! ./dataverseClient */ \"./node_modules/js-dataverse/dist/dataverseClient.js\"));\n__export(__webpack_require__(/*! ./@types/searchOptions */ \"./node_modules/js-dataverse/dist/@types/searchOptions.js\"));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/js-dataverse/dist/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = axios;\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ })

/******/ });