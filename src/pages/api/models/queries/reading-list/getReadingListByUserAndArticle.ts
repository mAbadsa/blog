import { QueryConfig, QueryResult, Pool } from 'pg';
import { QueryArticleDataType, QueryUserDataType } from '@pages/api/type';

interface QueryArticleReadingListType extends QueryArticleDataType, QueryUserDataType {}

const getReadingListByUserAndArticle =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends QueryArticleReadingListType>({ user_id, article_id }: T) => {
    const sql: QueryConfig<any[]> = {
      text: `SELECT id, user_id, article_id FROM reading_list WHERE user_id = $1 AND article_id = $2;`,
      values: [user_id, article_id],
    };
    return connection.query(sql);
  };

export default getReadingListByUserAndArticle;
