import { QueryConfig, QueryResult, Pool } from 'pg';
import { QueryUserDataType, QueryArticleDataType } from '@pages/api/type';

interface QueryInsertArticleReadingListType extends QueryArticleDataType, QueryUserDataType {}

const insertArticleToReadingList =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends QueryInsertArticleReadingListType>({ user_id, article_id }: T) => {
    const sql: QueryConfig<any[]> = {
      text: `INSERT INTO reading_list(user_id, article_id) VALUES($1, $2);`,
      values: [user_id, article_id],
    };
    return connection.query(sql);
  };

export default insertArticleToReadingList;
