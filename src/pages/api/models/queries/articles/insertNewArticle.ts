import { QueryConfig, QueryResult, Pool } from 'pg';

type articleObj = {
  title: string;
  slug: string;
  content: string;
  status: string;
  coverImage: string;
  tags: string;
  lastReading: string;
  userId: string;
};

const insertNewArticle =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends articleObj>({
    title,
    slug,
    content,
    status,
    coverImage,
    tags,
    lastReading,
    userId,
  }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `INSERT INTO articles(title, slug, content, status, cover_image, tags, last_reading, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8);`,
      values: [title, slug, content, status, coverImage, tags, lastReading, userId],
    };

    return connection.query(sql);
  };

export default insertNewArticle;
