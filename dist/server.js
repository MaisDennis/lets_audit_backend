"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// -----------------------------------------------------------------------------
const routes_1 = require("./routes");
var cors = require('cors');
// -----------------------------------------------------------------------------
const app = (0, express_1.default)();
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 2 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
// Apply the rate limiting middleware to all requests
app.use(limiter);
app.use(cors());
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((err, request, response, next) => {
    if (err instanceof Error) {
        return response.status(400).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error."
    });
});
app.listen(3333, () => console.log("Server is running at port 3333."));
// app.listen(3002, () => console.log("Server is running at port 3002."))
//# sourceMappingURL=server.js.map