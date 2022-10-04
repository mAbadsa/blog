import { QueryConfig, QueryResult } from 'pg';
import connection from '../../connection';

type UserObj = {
  username: string;
  name: string;
  bio: string;
  email: string;
  profileImage: string;
};

const insertNewUser = <T extends UserObj>({
  username,
  name,
  email,
  profileImage,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig<any[]> = {
    text: `INSERT INTO users(username, name, email, profile_image) VALUES($1, $2, $3, $4);`,
    values: [username, name, email, profileImage],
  };
  return connection.query(sql);
};

export default insertNewUser;
