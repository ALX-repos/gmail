import { Router } from "express";
import {
  addAccount,
  addAccountWithParent,
  addUnknown,
  getAccounts,
  getAccountsWithParent,
  getUnknowns,
} from "../controllers/appleController";

const router = Router();

router.post("/add-account", addAccount);

router.post("/add-account-with-parent", addAccountWithParent);

router.post("/add-unknown", addUnknown);

router.get("/get-accounts", getAccounts);

router.get("/get-accounts-with-parent", getAccountsWithParent);

router.get("/get-unknowns", getUnknowns);

export default router;
