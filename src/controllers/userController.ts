import { Request, Response } from 'express';
import { users, User } from '../models/userModel';

export const getUsers = (req: Request, res: Response): void => {
  res.json(users);
};

export const createUser = (req: Request, res: Response): void => {
  const newUser: User = {
    id: users.length + 1,
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
};