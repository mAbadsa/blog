import { QueryConfig, QueryResult, Pool } from 'pg';

const deleteArticle =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends { slug: string; userId: number }>({ slug, userId }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `DELETE FROM articles WHERE slug = $1 AND user_id = $2;`,
      values: [slug, userId],
    };

    return connection.query(sql);
  };

export default deleteArticle;
