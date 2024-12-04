import Express from "express";
import { getProfileDetails, updateProfile } from "../controllers/profile.controller.js";

const router = Express.Router();

router.post('/fetch-profile', getProfileDetails);
router.post('/update-profile', updateProfile);

export default router;