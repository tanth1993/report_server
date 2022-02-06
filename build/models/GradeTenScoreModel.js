"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeTenScoreModel = void 0;
var mongoose_1 = require("mongoose");
var GradeTenScoreModelSchema = new mongoose_1.Schema({
    gradeId: String,
    subjectId: String,
    score: Number,
    studentId: String,
});
exports.GradeTenScoreModel = mongoose_1.model("GradeTenScoreModel", GradeTenScoreModelSchema, 'GradeTenScoreModel');
//# sourceMappingURL=GradeTenScoreModel.js.map