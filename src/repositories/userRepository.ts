import { Pool } from 'pg';
import pool from '../config/database';
import { User } from '../models/userModel';

export class UserRepository {
  private pool: Pool = pool;

  async getUserByEmail(email: string): Promise<User | null> {
    const { rows } = await this.pool.query('SELECT email, passwordhash FROM users WHERE email = $1', [email]);
    console.log("Resultado da consulta:", rows);
    return rows[0] || null;
  }

  async addUser(name: string, email: string, passwordhash: string): Promise<User> {
    const query = 'INSERT INTO users (name, email, passwordhash) VALUES ($1, $2, $3) RETURNING *'; 
    const { rows } = await this.pool.query(query, [name, email, passwordhash]);
    return rows[0];
  }

  async getAllUsers() {
    try {
      const query = "SELECT * FROM users";
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      throw new Error("Erro ao buscar usuários no banco de dados");
    }
  }
}
