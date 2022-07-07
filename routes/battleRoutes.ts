import express from "express"
import { postBattle } from "../controllers/battleController.js";

const battleRouter = express.Router();

battleRouter.post("/battle", postBattle)

export default battleRouter;