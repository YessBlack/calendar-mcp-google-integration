import { Router } from "express";
import {
  googleCallback,
  redirectToGoogle,
} from "../controllers/auth.controller";

const router = Router();

router.get("/auth", redirectToGoogle);
router.get("/oauth2callback", googleCallback);

export default router;
