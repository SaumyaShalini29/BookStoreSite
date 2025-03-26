import express from "express";
import {signup,login} from "../controller/user.controller.js";
import { getBook } from "../controller/book.controller.js";
const router = express.Router();
router.get("/", getBook);
router.post("/signup",signup);
router.post("/login",login);
export default router;

