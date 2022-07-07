import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const {Pool} = pg;
const db = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "starfighters"
});

export default db;

// const { Pool } = pg;
// const configDatabase = {
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// };

// const db = new Pool(configDatabase);
// export default db;