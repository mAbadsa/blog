import connection from '../../connection';
import { QueryConfig, QueryResult } from 'pg';

type ArticleType = {
  limit: number;
  offset: number;
};

const getAllArticle = <T extends ArticleType>({
  limit = 15,
  offset = 0,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig = {
    text: `SELECT a.id, a.title, a.slug, a.content, a.cover_image, a.tags, a.last_reading,
    a.user_id, a.created_at, a.updated_at, u.username, u.name, u.bio, u.email, u.display_email, u.profile_image,
    u.location, u.github_account, u.website_url, u.created_at as user_created_at, c.id as commentId, l.id as likeId
    FROM articles as a 
    INNER JOIN users as u ON u.id = a.user_id
    LEFT JOIN likes as l ON a.id = l.article_id
    LEFT JOIN comments as c ON a.id = c.article_id
    WHERE a.status = 'published'
    LIMIT $1 OFFSET $2;`,
    values: [limit, offset],
  };

  return connection.query(sql);
};

export default getAllArticle;
