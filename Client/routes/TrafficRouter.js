"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = __importStar(require("path"));
const router = express_1.Router();
router.get('/', (req, res) => {
    res.sendFile(path.resolve("../Client/views/MainPage.html"));
});
router.get('/login', (req, res) => {
    res.sendFile(path.resolve("../Client/views/Login.html"));
});
router.get('/stocks', (req, res) => {
    // Verify that they have a session before allowing them through
    res.sendFile(path.resolve("../Client/views/StockInfo.html"));
});
exports.TrafficRouter = router;
