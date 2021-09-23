"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoSchema = exports.TestModel = void 0;
var mongoose_1 = require("mongoose");
var testSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    address: String
});
var geoSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    address: String
});
exports.TestModel = mongoose_1.model("reportModel", testSchema, 'reportModel');
exports.GeoSchema = mongoose_1.model("geoModel", geoSchema, 'geoModel');
//# sourceMappingURL=Test.js.map