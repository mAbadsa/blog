import connection from "../../connection";
import { QueryConfig, QueryResult } from "pg";

type ArticleType = {
  limit: number;
  offset: number;
};

const getAllArticle = <T extends ArticleType>({
  limit = 10,
  offset = 0,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: `SELECT id, title, slug, content, cover_image, tags, last_reading,
    user_id, created_at, updated_at FROM articles LIMIT $1 OFFSET $2;`,
    values: [limit, offset],
  };

  return connection.query(sql);
};

export default getAllArticle;
