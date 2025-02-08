"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AccountWithParentSchema = new mongoose_1.Schema({
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
    cvv: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
});
const AccountWithParent = (mongoose_1.models === null || mongoose_1.models === void 0 ? void 0 : mongoose_1.models.AccountWithParent) ||
    (0, mongoose_1.model)("AccountWithParent", AccountWithParentSchema);
exports.default = AccountWithParent;
