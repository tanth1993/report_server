"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TestController_1 = __importDefault(require("../controllers/TestController"));
var router = express_1.Router();
router.use('/', TestController_1.default.index);
exports.default = router;
//# sourceMappingURL=testRoute.js.map