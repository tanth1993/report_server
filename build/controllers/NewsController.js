"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var mongoose_1 = require("mongoose");
var NewsController = (function () {
    function NewsController() {
    }
    NewsController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, models_1.NewsModel.find({}).sort({ createdAt: -1 })];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        res.status(500).send(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    NewsController.prototype.getDataByQuery = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var query, _b, text, _c, page, _d, pageSize, skip, textStr, textPattern, data, totalCount, paginationData, error_2;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 3, , 4]);
                        query = req.query;
                        if (!(((_a = Object.keys(query)) === null || _a === void 0 ? void 0 : _a.length) > 0))
                            throw new Error("missing Query");
                        _b = query, text = _b.text, _c = _b.page, page = _c === void 0 ? 1 : _c, _d = _b.pageSize, pageSize = _d === void 0 ? 10 : _d;
                        skip = page > 0 ? (page - 1) * pageSize : 0;
                        textStr = text ? text.toString() : '';
                        textPattern = new RegExp(textStr, 'i');
                        return [4, models_1.NewsModel.find({ name: textPattern }).skip(skip).limit(pageSize)];
                    case 1:
                        data = _e.sent();
                        return [4, models_1.NewsModel.find({ name: textPattern }).count()];
                    case 2:
                        totalCount = _e.sent();
                        paginationData = { data: data, totalCount: totalCount };
                        res.json(paginationData);
                        return [3, 4];
                    case 3:
                        error_2 = _e.sent();
                        console.log(error_2);
                        res.status(500).send(error_2);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    };
    NewsController.prototype.getDetail = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, objectId, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        if (!id)
                            throw new Error("missing Query Id");
                        objectId = new mongoose_1.Types.ObjectId(id);
                        return [4, models_1.NewsModel.findById(objectId).exec()];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        res.status(500).send(error_3);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    NewsController.prototype.deleteMany = function (req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var ids, idArr, data, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        ids = (req === null || req === void 0 ? void 0 : req.query).ids;
                        if (!ids)
                            throw new Error("missing Query Ids");
                        idArr = (_a = ids) === null || _a === void 0 ? void 0 : _a.split(',');
                        return [4, models_1.NewsModel.deleteMany({ _id: { $in: idArr } })];
                    case 1:
                        data = _b.sent();
                        res.json(data);
                        return [3, 3];
                    case 2:
                        error_4 = _b.sent();
                        console.log(error_4);
                        res.status(500).send(error_4);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    NewsController.prototype.createNews = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var docs, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (!req.body)
                            throw new Error("missing Body Request");
                        docs = req.body;
                        return [4, models_1.NewsModel.create(docs)];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3, 3];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        res.status(500).send(error_5);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    NewsController.prototype.updateNews = function (req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var doc, data, error_6;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        if (!req.body)
                            throw new Error("missing Body Request");
                        if (!((_a = req.params) === null || _a === void 0 ? void 0 : _a.id))
                            throw new Error("missing Id");
                        doc = req.body;
                        return [4, models_1.NewsModel.findOneAndUpdate({ _id: (_b = req.params) === null || _b === void 0 ? void 0 : _b.id }, doc, { returnOriginal: false })];
                    case 1:
                        data = _c.sent();
                        res.json(data);
                        return [3, 3];
                    case 2:
                        error_6 = _c.sent();
                        console.log(error_6);
                        res.status(500).send(error_6);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    return NewsController;
}());
exports.default = new NewsController();
//# sourceMappingURL=NewsController.js.map