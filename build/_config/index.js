"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = exports.connectDB = void 0;
var mongoose_1 = require("mongoose");
var userName = 'tan2cang';
var pass = 'tan123456';
var dbName = 'reports';
var uri = "mongodb+srv://" + userName + ":" + pass + "@cluster0.3ecjs.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
function connectDB() {
    mongoose_1.connect(uri);
}
exports.connectDB = connectDB;
var testSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    address: String
});
exports.TestModel = mongoose_1.model("reports", testSchema);
//# sourceMappingURL=index.js.map