import { Pool } from "pg";

const connectionString =
  "postgresql://postgres:dPSqVmBZVDrGqEUWmEkxbhPkAJScYzbG@autorack.proxy.rlwy.net:46270/railway";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default pool;



