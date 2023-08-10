"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatus = void 0;
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["Created"] = 201] = "Created";
    ResponseStatus[ResponseStatus["Error"] = 400] = "Error";
    ResponseStatus[ResponseStatus["Unauthorized"] = 401] = "Unauthorized";
    ResponseStatus[ResponseStatus["Forbidden"] = 403] = "Forbidden";
    ResponseStatus[ResponseStatus["NoContent"] = 204] = "NoContent";
})(ResponseStatus || (exports.ResponseStatus = ResponseStatus = {}));
