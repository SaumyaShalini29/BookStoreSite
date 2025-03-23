import express from "express";
import { signup } from "../controller/user.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("User route is working!");
});

router.post("/signup", signup);

export default router;
