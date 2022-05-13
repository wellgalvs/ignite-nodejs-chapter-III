import { Router } from "express";
import { CreateSpecificationsController } from "../modules/cars/useCases/createSpecification/CreateSpecificationsController";

const specificationRoutes = Router();

const createSpecificationsController = new CreateSpecificationsController();

specificationRoutes.post("/", createSpecificationsController.handle);

export { specificationRoutes };