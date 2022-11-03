import { QueryConfig, QueryResult, Pool } from 'pg';

type articleObj = {
  title: string;
  slug: string;
  tempSlug: string;
  content: string;
  coverImage: string;
  tags: string;
  status: string;
  lastReading: string;
  userId: string;
};

const insertNewArticle =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends articleObj>({
    title,
    slug,
    tempSlug,
    content,
    coverImage,
    tags,
    status,
    lastReading,
    userId,
  }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `INSERT INTO articles(title, slug, temp_slug, content, cover_image, tags, status, last_reading, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
      values: [title, slug, tempSlug, content, coverImage, tags, status, lastReading, userId],
    };

    return connection.query(sql);
  };

export default insertNewArticle;
