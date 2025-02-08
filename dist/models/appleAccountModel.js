"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AppleAccountSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    first_q: {
        type: String,
        required: true,
    },
    second_q: {
        type: String,
        required: true,
    },
    third_q: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const AppleAccount = (mongoose_1.models === null || mongoose_1.models === void 0 ? void 0 : mongoose_1.models.AppleAccount) ||
    (0, mongoose_1.model)("AppleAccount", AppleAccountSchema);
exports.default = AppleAccount;
