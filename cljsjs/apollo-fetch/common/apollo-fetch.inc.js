var apolloFetch = (function (exports) {
'use strict';

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function buildWareStack(funcs, modifiedObject, resolve) {
    var _this = this;
    var next = function () {
        if (funcs.length > 0) {
            var f = funcs.shift();
            if (f) {
                f.apply(_this, [modifiedObject, next]);
            }
        }
        else {
            resolve(modifiedObject);
        }
    };
    next();
}
function constructDefaultOptions(requestOrRequests, options) {
    var body;
    try {
        body = JSON.stringify(requestOrRequests);
    }
    catch (e) {
        throw new Error("Network request failed. Payload is not serializable: " + e.message);
    }
    return __assign({ body: body, method: 'POST' }, options, { headers: __assign({ Accept: '*/*', 'Content-Type': 'application/json' }, options.headers || []) });
}
function throwHttpError(response, error) {
    var httpError;
    if (response && response.status >= 300) {
        httpError = new Error("Network request failed with status " + response.status + " - \"" + response.statusText + "\"");
    }
    else {
        httpError = new Error("Network request failed to return valid JSON");
    }
    httpError.response = response;
    httpError.parseError = error;
    throw httpError;
}
function throwBatchError(response) {
    var httpError = new Error("A batched Operation of responses for ");
    httpError.response = response;
    throw httpError;
}
function createApolloFetch(params) {
    if (params === void 0) { params = {}; }
    var constructOptions = params.constructOptions, customFetch = params.customFetch;
    var _uri = params.uri || '/graphql';
    var middlewares = [];
    var batchedMiddlewares = [];
    var afterwares = [];
    var batchedAfterwares = [];
    var applyMiddlewares = function (requestAndOptions, batched) {
        return new Promise(function (resolve, reject) {
            if (batched) {
                buildWareStack(batchedMiddlewares.slice(), requestAndOptions, resolve);
            }
            else {
                buildWareStack(middlewares.slice(), requestAndOptions, resolve);
            }
        });
    };
    var applyAfterwares = function (responseObject, batched) {
        return new Promise(function (resolve, reject) {
            if (batched) {
                buildWareStack(batchedAfterwares.slice(), responseObject, resolve);
            }
            else {
                buildWareStack(afterwares.slice(), responseObject, resolve);
            }
        });
    };
    var apolloFetch = function (request) {
        var options = {};
        var parseError;
        var batched = Array.isArray(request);
        var requestObject = (batched
            ? {
                requests: request,
                options: options,
            }
            : {
                request: request,
                options: options,
            });
        return applyMiddlewares(requestObject, batched)
            .then(function (reqOpts) {
            var construct = constructOptions || constructDefaultOptions;
            var requestOrRequests = reqOpts.request ||
                reqOpts.requests;
            return construct(requestOrRequests, reqOpts.options);
        })
            .then(function (opts) {
            options = __assign({}, opts);
            return (customFetch || fetch)(_uri, options);
        })
            .then(function (response) {
            return response.text().then(function (raw) {
                try {
                    var parsed = JSON.parse(raw);
                    response.raw = raw;
                    response.parsed = parsed;
                    return response;
                }
                catch (e) {
                    parseError = e;
                    response.raw = raw;
                    return response;
                }
            });
        })
            .then(function (response) {
            return applyAfterwares({
                response: response,
                options: options,
            }, batched);
        })
            .then(function (_a) {
            var response = _a.response;
            if (response.parsed) {
                if (batched) {
                    if (Array.isArray(response.parsed)) {
                        return response.parsed;
                    }
                    else {
                        throwBatchError(response);
                    }
                }
                else {
                    return __assign({}, response.parsed);
                }
            }
            else {
                throwHttpError(response, parseError);
            }
        });
    };
    apolloFetch.use = function (middleware) {
        if (typeof middleware === 'function') {
            middlewares.push(middleware);
        }
        else {
            throw new Error('Middleware must be a function');
        }
        return apolloFetch;
    };
    apolloFetch.useAfter = function (afterware) {
        if (typeof afterware === 'function') {
            afterwares.push(afterware);
        }
        else {
            throw new Error('Afterware must be a function');
        }
        return apolloFetch;
    };
    apolloFetch.batchUse = function (middleware) {
        if (typeof middleware === 'function') {
            batchedMiddlewares.push(middleware);
        }
        else {
            throw new Error('Middleware must be a function');
        }
        return apolloFetch;
    };
    apolloFetch.batchUseAfter = function (afterware) {
        if (typeof afterware === 'function') {
            batchedAfterwares.push(afterware);
        }
        else {
            throw new Error('Afterware must be a function');
        }
        return apolloFetch;
    };
    return apolloFetch;
}

exports.constructDefaultOptions = constructDefaultOptions;
exports.createApolloFetch = createApolloFetch;

return exports;

}({}));
