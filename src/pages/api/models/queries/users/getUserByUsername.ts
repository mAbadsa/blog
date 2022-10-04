import { QueryConfig, QueryResult } from 'pg';
import connection from '../../connection';

type UsernameType = {
  username: string | string[];
};

const getUserByUsername = <T extends UsernameType>({ username }: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig<any[]> = {
    text: `SELECT id, username, name, bio, email, display_email, profile_image, location, github_account, website_url FROM users WHERE username = $1;`,
    values: [username],
  };

  return connection.query(sql);
};

export default getUserByUsername;
