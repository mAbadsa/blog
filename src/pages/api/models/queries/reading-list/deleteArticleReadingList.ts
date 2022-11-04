import { QueryConfig, QueryResult, Pool } from 'pg';

const deleteArticleReadlinList =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends { user_id: number; article_id: number }>({
    user_id,
    article_id,
  }: T): Promise<QueryResult> => {
    const sql: QueryConfig = {
      text: `DELETE FROM reading_list WHERE user_id = $1 AND article_id = $2;`,
      values: [user_id, article_id],
    };
    return connection.query(sql);
  };

export default deleteArticleReadlinList;
