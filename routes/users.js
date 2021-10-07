import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.get("/sign-up", controllers.signUp);
router.get("/sign-in", controllers.signIn);
router.get("/verify", controllers.verify);
//change password?

export default router;
