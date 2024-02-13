"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsModel = void 0;
var mongoose_1 = require("mongoose");
var NewsModelSchema = new mongoose_1.Schema({
    title: String,
    content: String,
    imageUrl: String
}, { timestamps: true, });
exports.NewsModel = mongoose_1.model("NewsModel", NewsModelSchema, 'NewsModel');
//# sourceMappingURL=NewsModel.js.map