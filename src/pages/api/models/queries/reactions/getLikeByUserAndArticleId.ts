import { QueryConfig, QueryResult } from 'pg';

import connection from '../../connection';

const getLikeByUserAndArticleId = <T extends { articleId: number; userId: number }>({
  userId,
  articleId,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: 'SELECT id, user_id, article_id FROM likes WHERE  user_id = $1 AND article_id = $2;',
    values: [userId, articleId],
  };

  return connection.query(sql);
};

export default getLikeByUserAndArticleId;
