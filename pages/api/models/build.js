const { readFileSync } = require("fs");
const { join } = require("path");

import connection from "./connection";

const build = () => {
  const sqlSchema = readFileSync(join(__dirname, "./build.sql")).toString();
  connection.query(sqlSchema);
};

export default build;
