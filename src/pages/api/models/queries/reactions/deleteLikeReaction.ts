import { QueryConfig, QueryResult } from 'pg';

import connection from '../../connection';

const deleteLikeReaction = <T extends { userId: number; articleId: number }>({
  userId,
  articleId,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: 'DELETE FROM likes WHERE  user_id = $1 AND article_id = $2;',
    values: [userId, articleId],
  };

  return connection.query(sql);
};

export default deleteLikeReaction;
