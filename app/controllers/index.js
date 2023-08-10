"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionController = exports.rolesController = exports.companyController = exports.userController = exports.authController = void 0;
const authController_1 = __importDefault(require("./authController"));
exports.authController = authController_1.default;
const userController_1 = __importDefault(require("./userController"));
exports.userController = userController_1.default;
const companyController_1 = __importDefault(require("./companyController"));
exports.companyController = companyController_1.default;
const rolesController_1 = __importDefault(require("./rolesController"));
exports.rolesController = rolesController_1.default;
const permissionController_1 = __importDefault(require("./permissionController"));
exports.permissionController = permissionController_1.default;
