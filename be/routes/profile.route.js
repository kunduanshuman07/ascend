import Express from "express";
import { getProfileDetails } from "../controllers/profile.controller.js";

const router = Express.Router();

router.post('/fetch-profile', getProfileDetails);

export default router;