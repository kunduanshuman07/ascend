import Express from "express";
import { getAllSkills } from "../controllers/skills.controller.js";

const router = Express.Router();

router.get('/fetch-skills', getAllSkills);

export default router;