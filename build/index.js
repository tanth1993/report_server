"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3099;
app.get('/test', (req, res) => {
    res.send('tesst APi here!');
});
app.get('/entry', (req, res) => {
    res.send('entry API fucking here!');
});
app.get('/', (req, res) => {
    res.send('Hello World heheheheh!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map