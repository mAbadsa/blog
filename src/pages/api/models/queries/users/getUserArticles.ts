import { QueryConfig, QueryResult, Pool } from 'pg';

type UserType = {
  username: string | string[];
};

const getUserArticles =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends UserType>({ username }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `SELECT a.id, a.title, a.slug, a.temp_slug,a.status FROM articles AS a INNER JOIN users AS u ON u.id = a.user_id WHERE u.username = $1;`,
      values: [username],
    };
    return connection.query(sql);
  };

export default getUserArticles;
