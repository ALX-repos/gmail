"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GmailSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const Gmail = (mongoose_1.models === null || mongoose_1.models === void 0 ? void 0 : mongoose_1.models.Gmail) || (0, mongoose_1.model)("Gmail", GmailSchema);
exports.default = Gmail;
