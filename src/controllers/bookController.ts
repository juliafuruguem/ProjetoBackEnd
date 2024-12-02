import { Request, Response } from 'express';
import { BookService } from '../services/bookService';

const bookService = new BookService();

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.listBooks();
    res.status(200).json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar Livros' });
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;
  try {
    const book = await bookService.createBook(title, author, price);
    res.status(201).json(book);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};