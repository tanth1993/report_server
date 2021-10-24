"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeElevenScoreModel = void 0;
var mongoose_1 = require("mongoose");
var GradeElevenScoreModelSchema = new mongoose_1.Schema({
    _id: String,
    gradeId: String,
    subjectId: String,
    score: Number,
    studentId: String,
});
exports.GradeElevenScoreModel = mongoose_1.model("GradeElevenScoreModel", GradeElevenScoreModelSchema, 'GradeElevenScoreModel');
//# sourceMappingURL=GradeElevenScoreModel.js.map