import { Router } from "express";
import storiesRoutes from "./stories.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.render("I am root."));

router.use("/", storiesRoutes);
router.use("/", usersRoutes);

export default router;
