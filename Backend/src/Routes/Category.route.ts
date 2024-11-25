import express, { Request, Response, NextFunction } from "express";
import adminAuth from '../middlewares/Auth.admin.js';
import { addCategory, viewcategory, deleteCategory, updateCategory } from '../controllers/Category.js';

const categoryRouter = express.Router();

// These route handlers now expect RequestWithAdmin as the req type
categoryRouter.post('/add', adminAuth, (req: Request, res: Response, next: NextFunction) => {
  addCategory(req, res, next);
});

categoryRouter.get('/all', adminAuth, (req: Request, res: Response, next: NextFunction) => {
  viewcategory(req, res, next);
});

categoryRouter.delete('/remove/:_id', adminAuth, (req: Request, res: Response, next: NextFunction) => {
  deleteCategory(req, res, next);
});

categoryRouter.put('/update', adminAuth, (req: Request, res: Response, next: NextFunction) => {
  updateCategory(req, res, next);
});

export default categoryRouter;
