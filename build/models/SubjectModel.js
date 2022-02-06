"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectModel = void 0;
var mongoose_1 = require("mongoose");
var SubjectModelSchema = new mongoose_1.Schema({
    subjectId: String,
    subjectName: String,
    subjectNameVN: String,
});
exports.SubjectModel = mongoose_1.model("SubjectModel", SubjectModelSchema, 'SubjectModel');
//# sourceMappingURL=SubjectModel.js.map