import Express from "express";
import { signin } from "../controllers/auth.controller.js";

const router = Express.Router();

router.post('/signin', signin);

export default router;