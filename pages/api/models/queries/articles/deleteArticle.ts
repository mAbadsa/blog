import { QueryConfig, QueryResult, Pool } from 'pg';

const deleteArticle =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends { slug: string }>({ slug }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `DELETE FROM articles WHERE slug = $1;`,
      values: [slug],
    };

    return connection.query(sql);
  };

export default deleteArticle;
