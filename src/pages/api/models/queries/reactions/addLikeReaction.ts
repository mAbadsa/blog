import { QueryConfig, QueryResult } from 'pg';
import connection from '../../connection';

const addLike = <T extends { userId: number; articleId: number }>({
  userId,
  articleId,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: 'INSERT INTO likes(user_id, article_id) VALUES($1, $2);',
    values: [userId, articleId],
  };

  return connection.query(sql);
};

export default addLike;
