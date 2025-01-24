import 'dotenv/config';
import Sequelize from 'sequelize';

// let client;

// if (process.env.DB_URL) {
//   client = new Sequelize({
//     host: process.env.DB_URL,
//     dialect: 'postgres',
//     database: process.env.DB_DATABASE,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//   });
// } else {
//   client = new Sequelize({
//     host: 'localhost',
//     dialect: 'postgres',
//     database: process.env.DB_DATABASE,
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//   });
// }

const client = new Sequelize({
  host: 'postgres',
  dialect: 'postgres',
  database: 'catalog',
  username: 'postgres',
  password: '123123',
});

export default client;
