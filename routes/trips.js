import { Router } from "express";
import * as controllers from "../controllers/trips.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/trips", controllers.getTrips);
router.get("/trips/:id", controllers.getTrip);
router.post("/trips", restrict, controllers.createTrip);
router.put("/trips/:id", restrict, controllers.updateTrip);
router.delete("/trips/:id", restrict, controllers.deleteTrip);

export default router;
