"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeModel = void 0;
var mongoose_1 = require("mongoose");
var GradeModelSchema = new mongoose_1.Schema({
    _id: String,
    gradeId: String,
    name: String,
});
exports.GradeModel = mongoose_1.model("GradeModel", GradeModelSchema, 'GradeModel');
//# sourceMappingURL=GradeModel.js.map