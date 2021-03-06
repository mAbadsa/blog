const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const build = () => {
  const sqlSchema = readFileSync(join(__dirname, '../../../pages/api/models/build.sql')).toString();
  connection.query(sqlSchema);
};

module.exports = build;
