"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var app = express_1.default();
exports.app = app;
var port = 3099;
app.get('/test', function (req, res) {
    res.send('tesst APi here!');
});
app.get('/', function (req, res) {
    res.send('Hello World heheheheh!');
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map