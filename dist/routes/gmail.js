"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gmailController_1 = require("../controllers/gmailController");
const router = (0, express_1.Router)();
router.post("/add-gmail", gmailController_1.addGmail);
router.get("/get-gmail", gmailController_1.getGmail);
exports.default = router;
