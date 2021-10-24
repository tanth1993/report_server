"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
var mongoose_1 = require("mongoose");
var StudentModelSchema = new mongoose_1.Schema({
    _id: String,
    studentId: String,
    name: String,
    birthday: String,
    isMale: Boolean,
});
exports.StudentModel = mongoose_1.model("StudentModel", StudentModelSchema, 'StudentModel');
//# sourceMappingURL=StudentModel.js.map