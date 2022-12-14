import express from "express";
import { remove, edit, logout, see } from "../controllers/userController";
const userRouter = express.Router();



userRouter.get(":id(\\d+)", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);


export default userRouter;