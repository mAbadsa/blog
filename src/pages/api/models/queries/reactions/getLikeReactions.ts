import { QueryConfig, QueryResult } from 'pg';

import connection from '../../connection';

const getLikeReactions = <T extends { articleId: number }>({
  articleId,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: 'SELECT id, user_id, article_id FROM likes WHERE article_id = $1;',
    values: [articleId],
  };

  return connection.query(sql);
};

export default getLikeReactions;
