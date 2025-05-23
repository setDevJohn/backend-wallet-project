import { Router } from "express";
import { CategoriesController } from "../controller/categories";

const categoriesRoutes = Router();

const categoriesController = new CategoriesController();

categoriesRoutes.post('/', async (req, res) => {
  await categoriesController.create(req, res);
});

categoriesRoutes.get('/', async (req, res) => {
  await categoriesController.findMany(req, res);
});

export {categoriesRoutes}  