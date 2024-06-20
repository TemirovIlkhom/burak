 import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";

router.post("/login", memberController.login); // REST API

router.post("/signup", memberController.signup);

export default router;