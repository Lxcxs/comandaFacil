import { Router } from "express";
import { accountRoutes } from "./AccountRoutes/account.routes";
import { listAccountRoutes } from "./AccountRoutes/listAccount.routes";
import { deleteAccountRoutes } from "./AccountRoutes/deleteAccount.routes";
import { updateAccountRoutes } from "./AccountRoutes/updateAccount.routes";
import { createCategory } from "./CategoryRoutes/create.routes";
import { getCategoryRoute } from "./CategoryRoutes/get.routes";
import { deleteCategoryRoute } from "./CategoryRoutes/delete.routes";
import { updateCategoryRoute } from "./CategoryRoutes/update.routes";
import { createItemRoute } from "./ItemRoutes/create.routes";
import { getItemRoute } from "./ItemRoutes/get.routes";
import { deletItemRoute } from "./ItemRoutes/delete.routes";
import { updateItemRoute } from "./ItemRoutes/update.routes";
import { createCostumerRoute } from "./CostumerRoutes/create.routes";
import { deleteCostumerRoute } from "./CostumerRoutes/delete.routes";
import { getCostumerRoute } from "./CostumerRoutes/get.routes";
import { createOrderRoute } from "./orderRoutes/create.routes";
import { getOrderRoute } from "./orderRoutes/get.routes";
import { deleteOrderRoute } from "./orderRoutes/delete.routes";

const routes = Router();

routes.use("/contas", accountRoutes);
routes.use("/lista", listAccountRoutes);
routes.use("/lista", deleteAccountRoutes);
routes.use("/lista", updateAccountRoutes);

routes.use("/category", createCategory);
routes.use("/category", getCategoryRoute);
routes.use("/category", deleteCategoryRoute);
routes.use("/category", updateCategoryRoute);

routes.use("/item", createItemRoute);
routes.use("/item", getItemRoute);
routes.use("/item", deletItemRoute);
routes.use("/item", updateItemRoute);

routes.use("/costumer", createCostumerRoute);
routes.use("/costumer", getCostumerRoute);
routes.use("/costumer", deleteCostumerRoute);

routes.use("/order", createOrderRoute);
routes.use("/order", getOrderRoute);
routes.use("/order", deleteOrderRoute);




export { routes };
