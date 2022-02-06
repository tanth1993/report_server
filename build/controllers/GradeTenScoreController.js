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
var GradeTenScoreController = (function () {
    function GradeTenScoreController() {
    }
    GradeTenScoreController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var test, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, models_1.GradeTenScoreModel.find({})];
                    case 1:
                        test = _a.sent();
                        res.json(test);
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
    GradeTenScoreController.prototype.getAvgScore = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pipeline, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        pipeline = [
                            {
                                "$group": {
                                    "_id": "$subjectId",
                                    "total": {
                                        "$avg": "$score"
                                    }
                                }
                            },
                        ];
                        return [4, models_1.GradeTenScoreModel.aggregate(pipeline)];
                    case 1:
                        data = _a.sent();
                        res.json(data);
                        return [3, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        res.status(500).send(error_2);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    GradeTenScoreController.prototype.getAvgScoreByGenderList = function (genderList) {
        return __awaiter(this, void 0, void 0, function () {
            var pipeline, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ((genderList === null || genderList === void 0 ? void 0 : genderList.length) === 0)
                            return [2, null];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        pipeline = [
                            {
                                "$match": {
                                    "studentId": {
                                        "$in": genderList
                                    }
                                }
                            },
                            {
                                "$group": {
                                    "_id": "$subjectId",
                                    "total": {
                                        "$avg": "$score"
                                    }
                                }
                            },
                        ];
                        return [4, models_1.GradeTenScoreModel.aggregate(pipeline)];
                    case 2:
                        data = _a.sent();
                        return [2, data];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2, null];
                    case 4: return [2];
                }
            });
        });
    };
    GradeTenScoreController.prototype.getAvgScoreBySubject = function (subjectId) {
        return __awaiter(this, void 0, void 0, function () {
            var pipeline, data, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!subjectId)
                            return [2, null];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        pipeline = [
                            {
                                "$match": {
                                    "subjectId": subjectId
                                }
                            },
                            {
                                "$group": {
                                    "_id": "$gradeId",
                                    "total": {
                                        "$avg": "$score"
                                    }
                                }
                            },
                        ];
                        return [4, models_1.GradeTenScoreModel.aggregate(pipeline)];
                    case 2:
                        data = _a.sent();
                        return [2, data];
                    case 3:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2, null];
                    case 4: return [2];
                }
            });
        });
    };
    GradeTenScoreController.prototype.getScaleScoreBySubject = function (subjectId) {
        return __awaiter(this, void 0, void 0, function () {
            var pipeline, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!subjectId)
                            return [2, null];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        pipeline = [
                            {
                                "$match": {
                                    "subjectId": subjectId
                                }
                            },
                            {
                                "$group": {
                                    "_id": "$score",
                                    "total": {
                                        "$sum": 1
                                    }
                                }
                            },
                        ];
                        return [4, models_1.GradeTenScoreModel.aggregate(pipeline)];
                    case 2:
                        data = _a.sent();
                        return [2, data];
                    case 3:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [2, null];
                    case 4: return [2];
                }
            });
        });
    };
    GradeTenScoreController.prototype.getDataByStudentId = function (studentId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!studentId)
                            return [2, null];
                        return [4, models_1.GradeTenScoreModel.find({ studentId: studentId })];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    return GradeTenScoreController;
}());
exports.default = new GradeTenScoreController();
//# sourceMappingURL=GradeTenScoreController.js.map