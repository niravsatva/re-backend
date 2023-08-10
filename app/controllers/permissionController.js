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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repositories_1 = require("../repositories");
const defaultResponseHelper_1 = require("../helpers/defaultResponseHelper");
const validationHelper_1 = require("../helpers/validationHelper");
const permissionService_1 = __importDefault(require("../services/permissionService"));
const isAuthorizedUser_1 = require("../middlewares/isAuthorizedUser");
const customError_1 = require("../models/customError");
class PermissionController {
    getAllPermission(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const permissions = yield repositories_1.permissionRepository.getRolePermissions(id);
                return (0, defaultResponseHelper_1.DefaultResponse)(res, 200, 'Permissions fetched successfully', permissions);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updatePermission(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                (0, validationHelper_1.checkValidation)(req);
                const { orgId, roleId, permissions } = req.body;
                const isPermitted = yield (0, isAuthorizedUser_1.checkPermission)(req, orgId, {
                    permissionName: 'Roles',
                    permission: ['edit', 'add'],
                });
                if (!isPermitted) {
                    throw new customError_1.CustomError(403, 'You are not authorized');
                }
                yield permissionService_1.default.updatePermission(orgId, roleId, permissions);
                return (0, defaultResponseHelper_1.DefaultResponse)(res, 202, 'Permission updated successfully');
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = new PermissionController();
