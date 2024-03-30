import { Router } from "express";
import { userLogin, userSignup } from "../controller/user.controller.js";

const router = Router();


router.route("/register").post(userSignup)
router.route("/login").post(userLogin)

export default router ;