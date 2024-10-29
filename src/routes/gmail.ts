import { Router } from "express";
import { addGmail, getGmail } from "../controllers/gmailController";

const router = Router();

router.post("/add-gmail", addGmail);

router.get("/get-gmail", getGmail);

export default router;
