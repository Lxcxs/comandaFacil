import { Router } from "express";
import { CreateUserController } from "../../controller/User/Create";
import { GetUserController } from "../../controller/User/Get";
import { authenticateToken } from "../../middleware/autenticateToken";

const createUserCtrl = new CreateUserController();
const getUserCtrl = new GetUserController();

const userRouter = Router();

userRouter.post("/", createUserCtrl.handle);
userRouter.get("/", getUserCtrl.handle);
userRouter.get("/:id", getUserCtrl.handle);
// userRouter.put("/:id", updateUserCtrl.handle);
// userRouter.delete("/:id", deleteUserCtrl.handle);

export { userRouter };
