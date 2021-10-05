import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingController = new SettingsController();
const usersController = new UsersController();

routes.post("/settings", settingController.create);
routes.post("/users", usersController.create);

export { routes };