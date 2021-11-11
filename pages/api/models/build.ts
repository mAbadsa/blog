import { readFileSync } from 'fs';
import { join } from 'path';

import connection from './connection';

const build = () => {
  const sqlSchema = readFileSync(join(__dirname, './build.sql')).toString();
  connection.query(sqlSchema);
}

export default build;
