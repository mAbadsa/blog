import { QueryConfig, QueryResult, Pool } from 'pg';

type UserType = {
  username: string | string[];
};

const getUserDraftArticles =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends UserType>({ username }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `SELECT a.id, a.title, a.slug, a.status FROM draft_articles AS a INNER JOIN users AS u ON u.id = a.user_id WHERE u.username = $1;`,
      values: [username],
    };
    return connection.query(sql);
  };

export default getUserDraftArticles;
