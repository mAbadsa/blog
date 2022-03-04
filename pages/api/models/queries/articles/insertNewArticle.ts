import { QueryConfig, QueryResult } from "pg";
import connection from "../../connection";

type articleObj = {
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  tags: string;
  lastReading: string;
  userId: string;
};

const insertNewArticle = <T extends articleObj>({
  title,
  slug,
  content,
  coverImage,
  tags,
  lastReading,
  userId,
}: T): Promise<QueryResult<any>> => {
  const sql: QueryConfig<any[]> = {
    text: `INSERT INTO articles(title, slug, content, cover_image, tags, last_reading, user_id) VALUES($1, $2, $3, $4, $5, $6, $7);`,
    values: [title, slug, content, coverImage, tags, lastReading, userId],
  };

  return connection.query(sql);
};

export default insertNewArticle;
