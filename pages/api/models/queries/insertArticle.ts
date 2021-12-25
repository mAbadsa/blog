import connection from "../connection";

interface ArticleType {
  title: string;
  content: string;
  coverImage: string;
  userId: Number;
  tags: string;
}

const insertNewArticle = <T extends ArticleType>({
  title,
  content,
  coverImage,
  userId,
  tags,
}: T) => {
  const sql = {
    text: `
    INSERT INTO articles (title, content, cover_image, user_id, tags) VALUES ($1, $2, $3, $4);
    `,
    values: [title, content, coverImage, userId, tags],
  };
  return connection.query(sql);
};

export default insertNewArticle;
