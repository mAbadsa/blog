import { QueryConfig, QueryResult, Pool } from 'pg';

type articleObj = {
  title: string;
  slug: string;
  content: string;
  coverImage: string;
  tags: string;
};

const updateArticle =
  <U extends { connection: Pool }>({ connection }: U) =>
  <T extends articleObj>({
    title,
    slug,
    content,
    coverImage,
    tags,
  }: T): Promise<QueryResult<any>> => {
    const sql: QueryConfig<any[]> = {
      text: `UPDATE articles 
      SET title = $1,
      content = $2,
      cover_image = $3,
      tags = $4
      WHERE slug = $5;`,
      values: [title, content, coverImage, tags, slug],
    };

    return connection.query(sql);
  };

export default updateArticle;
