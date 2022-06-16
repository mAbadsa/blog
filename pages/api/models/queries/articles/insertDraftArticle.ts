import { QueryConfig, QueryResult, Pool } from 'pg';

type articleObj = {
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  tags: string;
  lastReading: string;
  userId: string;
};

const insertDraftArticle =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends articleObj>({
    title,
    slug,
    content,
    coverImage,
    tags,
    lastReading,
    userId,
  }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `INSERT INTO draft_articles(title, slug, content, cover_image, tags, last_reading, user_id) VALUES($1, $2, $3, $4, $5, $6, $7);`,
      values: [title, slug, content, coverImage, tags, lastReading, userId],
    };

    return connection.query(sql);
  };

export default insertDraftArticle;
