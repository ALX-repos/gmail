"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appleController_1 = require("../controllers/appleController");
const router = (0, express_1.Router)();
router.post("/add-account", appleController_1.addAccount);
router.post("/add-unknown", appleController_1.addUnknown);
router.post("/add-parent", appleController_1.addParent);
router.post("/add-error", appleController_1.addError);
router.post("/add-account-with-parent", appleController_1.addAccountWithParent);
router.get("/get-accounts", appleController_1.getAccounts);
router.get("/get-unknowns", appleController_1.getUnknowns);
router.get("/get-parents", appleController_1.getParents);
router.get("/get-errors", appleController_1.getErrors);
router.get("/get-accounts-with-parent", appleController_1.getAccountsWithParent);
exports.default = router;
