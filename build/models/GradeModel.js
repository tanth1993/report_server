"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeModel = void 0;
var mongoose_1 = require("mongoose");
var GradeModelSchema = new mongoose_1.Schema({
    gradeId: String,
    name: String,
    number: Number
});
exports.GradeModel = mongoose_1.model("GradeModel", GradeModelSchema, 'GradeModel');
//# sourceMappingURL=GradeModel.js.map