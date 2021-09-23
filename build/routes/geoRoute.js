"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var GeoController_1 = __importDefault(require("../controllers/GeoController"));
var router = express_1.Router();
router.use('/', GeoController_1.default.index);
exports.default = router;
//# sourceMappingURL=geoRoute.js.map