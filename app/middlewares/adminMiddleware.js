"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminUser = void 0;
const repositories_1 = require("../repositories");
const customError_1 = require("../models/customError");
const isAdminUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const orgId = req.body.orgId || req.body.company;
        const isAdmin = yield repositories_1.globalRepository.isAdminUser((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.id, orgId);
        req.idAdmin = isAdmin;
        if (!isAdmin) {
            const error = new customError_1.CustomError(403, 'You are unauthorized');
            throw error;
        }
        else {
            next();
        }
    }
    catch (error) {
        next(error);
    }
});
exports.isAdminUser = isAdminUser;
