"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
var mongoose_1 = require("mongoose");
var userName = 'tan2cang';
var pass = 'tan123456';
var dbName = 'reports';
var uri = "mongodb+srv://" + userName + ":" + pass + "@cluster0.3ecjs.mongodb.net/" + dbName + "?retryWrites=true&w=majority";
mongoose_1.connect(uri);
// export async function connectDB() {
//     await connect(uri);
// }
var db = mongoose_1.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
var testSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    address: String
});
exports.TestModel = mongoose_1.model("reports", testSchema);
//# sourceMappingURL=index.js.map