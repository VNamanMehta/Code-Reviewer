import express, { Router } from "express";
import * as aiController from "../controllers/ai.controller.js";

const router = Router();

router.post("/get-review",aiController.getReview)

export default router;