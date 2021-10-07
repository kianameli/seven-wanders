import { Router } from "express";
import tripsRoutes from "./trips.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.render("I am root."));

router.use("/", tripsRoutes);
router.use("/", usersRoutes);

export default router;
