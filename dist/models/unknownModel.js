"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UnknownSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
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
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    parent_email: {
        type: String,
        required: true,
    },
    parent_password: {
        type: String,
        required: true,
    },
    parent_date: {
        type: String,
        required: true,
    },
    parent_first_q: {
        type: String,
        required: true,
    },
    parent_second_q: {
        type: String,
        required: true,
    },
    parent_third_q: {
        type: String,
        required: true,
    },
    cvv: String,
    url: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const Unknown = (mongoose_1.models === null || mongoose_1.models === void 0 ? void 0 : mongoose_1.models.Unknown) ||
    (0, mongoose_1.model)("Unknown", UnknownSchema);
exports.default = Unknown;
