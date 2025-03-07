import { Router } from "express";
import {
  addAccount,
  addAccountWithParent,
  addError,
  addParent,
  addUnknown,
  getAccounts,
  getAccountsWithParent,
  getErrors,
  getParentsCvv,
  getParentsUrl,
  getUnknowns,
} from "../controllers/appleController";

const router = Router();

router.post("/add-account", addAccount);

router.post("/add-unknown", addUnknown);

router.post("/add-parent", addParent);

router.post("/add-error", addError);

router.post("/add-account-with-parent", addAccountWithParent);

router.get("/get-accounts", getAccounts);

router.get("/get-unknowns", getUnknowns);

router.get("/get-parents-cvv", getParentsCvv);

router.get("/get-parents-url", getParentsUrl);

router.get("/get-errors", getErrors);

router.get("/get-accounts-with-parent", getAccountsWithParent);

export default router;
