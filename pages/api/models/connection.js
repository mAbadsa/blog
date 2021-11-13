const { Pool } = require("pg");

const { DEV_DATABASE_URL, DATABASE_URL, NODE_ENV } = process.env;

console.log(process.env.DEV_DATABASE_URL);
console.log(process.env.DATABASE_URL);
console.log(process.env.NODE_ENV);

let dbUrl = "";
let sslValue;

switch (NODE_ENV) {
  case "production":
    dbUrl = DATABASE_URL;
    sslValue = {
      rejectUnauthorized: false,
    };
    break;
  case "development":
    dbUrl = DEV_DATABASE_URL;
    sslValue = false;
    break;
  default:
    throw new Error("No Database url!!!");
}
const options = {
  connectionString: dbUrl,
  ssl: sslValue,
};

module.exports = new Pool(options);
