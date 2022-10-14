import { QueryConfig, QueryResult, Pool } from 'pg';
import { QueryUserDataType } from '@pages/api/type';

const getUserReadingList =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends QueryUserDataType>({ user_id }: T) => {
    const sql: QueryConfig<any[]> = {
      text: `SELECT a.id, a.title, a.slug, a.tags, a.last_reading, a.created_at, r.archive, u.username, u.email, u.profile_image
      FROM articles AS a 
      INNER JOIN users AS u ON u.id = a.user_id
      INNER JOIN reading_list AS r ON r.article_id = a.id
      WHERE r.user_id = $1;`,
      values: [user_id],
    };
    return connection.query(sql);
  };

export default getUserReadingList;
