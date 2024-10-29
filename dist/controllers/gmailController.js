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
exports.getGmail = exports.addGmail = void 0;
const gmailModel_1 = __importDefault(require("../models/gmailModel"));
const addGmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        yield gmailModel_1.default.create({ email, password });
        res.status(200).send("Gmail added successfully");
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong adding the gmail");
    }
});
exports.addGmail = addGmail;
const getGmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.query;
    try {
        let gmail;
        if (password) {
            gmail = yield gmailModel_1.default.find({ password: password });
        }
        else {
            gmail = yield gmailModel_1.default.find();
        }
        const gmailText = gmail.map((el) => el.email).join("<br />");
        res.status(200).send(`<p>${gmailText}</p>`);
    }
    catch (error) {
        res.status(500).send("Something went wrong getting the gmail");
    }
});
exports.getGmail = getGmail;
