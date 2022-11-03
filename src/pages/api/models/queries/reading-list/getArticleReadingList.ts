import { QueryConfig, QueryResult, Pool } from 'pg';
import { QueryArticleDataType } from '@pages/api/type';

const getArticleReadingList =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends QueryArticleDataType>({ article_id }: T) => {
    const sql: QueryConfig<any[]> = {
      text: `SELECT id, user_id, article_id FROM reading_list WHERE article_id = $1;`,
      values: [article_id],
    };
    return connection.query(sql);
  };

export default getArticleReadingList;
