import { Router } from "express";
import * as controllers from "../controllers/stories.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/stories", controllers.getStories);
router.get("/stories/:id", controllers.getStory);
router.post("/story-create", restrict, controllers.createStory);
router.put("/stories/:id", restrict, controllers.updateStory);
router.delete("/stories/:id", restrict, controllers.deleteStory);

export default router;
