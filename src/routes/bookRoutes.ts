import { Router } from "express";
import { getAllBooks, addBook } from "../controllers/bookController";

const router = Router();

router.get("/livros", getAllBooks);
router.post("/livros", addBook);

export default router;

