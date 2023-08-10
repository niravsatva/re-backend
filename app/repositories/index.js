"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalRepository = exports.companyRoleRepository = exports.permissionRepository = exports.roleRepository = exports.companyRepository = exports.userRepository = void 0;
const userRepository_1 = __importDefault(require("./userRepository"));
exports.userRepository = userRepository_1.default;
const companyRepository_1 = __importDefault(require("./companyRepository"));
exports.companyRepository = companyRepository_1.default;
const roleRepository_1 = __importDefault(require("./roleRepository"));
exports.roleRepository = roleRepository_1.default;
const permissionRepository_1 = __importDefault(require("./permissionRepository"));
exports.permissionRepository = permissionRepository_1.default;
const companyRoleRepository_1 = __importDefault(require("./companyRoleRepository"));
exports.companyRoleRepository = companyRoleRepository_1.default;
const globalRepository_1 = __importDefault(require("./globalRepository"));
exports.globalRepository = globalRepository_1.default;
