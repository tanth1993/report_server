"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = exports.dbConnection = void 0;
var mongoose_1 = require("mongoose");
var userName = 'tan2cang';
var pass = 'tan123456';
var dbName = 'reports';
var uri = "mongodb+srv://" + userName + ":" + pass + "@cluster0.3ecjs.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
function dbConnection(callback) {
    mongoose_1.connect(uri).then(function () {
        var db = mongoose_1.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Connected successfully");
        });
        callback();
    });
}
exports.dbConnection = dbConnection;
var testSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    address: String
});
exports.TestModel = mongoose_1.model("reports", testSchema);
//# sourceMappingURL=index.js.map