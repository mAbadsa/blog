import connection from '../../connection';
import { QueryConfig, QueryResult } from 'pg';

type ArticleType = {
  slug: string;
  username: string;
};

const getArticleById = <T extends ArticleType>({
  slug,
  username,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: `SELECT a.id, a.title, a.slug, a.temp_slug, a.content, a.cover_image, a.tags, a.last_reading,
    a.user_id, a.created_at, a.updated_at, u.username, u.name, u.bio, u.email, u.display_email, u.profile_image,
    u.location, u.github_account, u.website_url, u.created_at as user_created_at FROM articles as a
    INNER JOIN users as u ON u.id = a.user_id WHERE a.slug = $1 AND u.username = $2;`,
    values: [slug, username],
  };

  return connection.query(sql);
};

export default getArticleById;
