"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeTwelveScoreModel = void 0;
var mongoose_1 = require("mongoose");
var GradeTwelveScoreModelSchema = new mongoose_1.Schema({
    _id: String,
    gradeId: String,
    subjectId: String,
    score: Number,
    studentId: String,
});
exports.GradeTwelveScoreModel = mongoose_1.model("GradeTwelveScoreModel", GradeTwelveScoreModelSchema, 'GradeTwelveScoreModel');
//# sourceMappingURL=GradeTwelveScoreModel.js.map