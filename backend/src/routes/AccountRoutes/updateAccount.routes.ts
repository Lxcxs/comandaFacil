import { Router } from "express";
import { UpdateAccountController } from "../../controller/User/UpdateAccountController";

const updateAccountController = new UpdateAccountController();

const updateAccountRoutes = Router();

updateAccountRoutes.put("/", updateAccountController.handle);

export { updateAccountRoutes };
