"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3099;
app.get('/api/test', function (req, res) {
    res.send('tesst APi here2222222!');
});
app.get('/api/entry', function (req, res) {
    res.send('entry API fucking here2222222!');
});
app.get('/api', function (req, res) {
    res.send('Hello World 2222222!');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
module.exports = app;
//# sourceMappingURL=index.js.map