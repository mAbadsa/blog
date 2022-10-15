import { QueryConfig, QueryResult, Pool } from 'pg';

const deleteArticleReadlinList =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends { id: number }>({ id }: T): Promise<QueryResult> => {
    const sql: QueryConfig = {
      text: `DELETE FROM reading_list WHERE id = $1;`,
      values: [id],
    };
    return connection.query(sql);
  };

export default deleteArticleReadlinList;
