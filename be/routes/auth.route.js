import Express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = Express.Router();

router.post('/signin', signin);
router.post('/signup', signup);

export default router;