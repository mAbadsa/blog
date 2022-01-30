import connection from "../../connection";
import { QueryConfig, QueryResult } from "pg";

type ArticleType = {
  id: number;
  username: string;
};

const getArticleById = <T extends ArticleType>({
  id,
  username,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: `SELECT a.id, a.title, a.slug, a.content, a.cover_image, a.tags, a.last_reading,
    a.user_id, a.created_at, a.updated_at, u.username, u.name, u.bio, u.email, u.display_email, u.profile_image,
    u.location, u.github_account, u.website_url, u.created_at as user_created_at FROM articles as a
    INNER JOIN users as u ON u.id = a.user_id WHERE a.id = $1 AND u.username = $2;`,
    values: [id, username],
  };

  return connection.query(sql);
};

export default getArticleById;
