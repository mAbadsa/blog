import type { NextApiRequest, NextApiResponse } from 'next';
import { getArticleBySlug } from '@pages/api/models/queries/articles';

type Data = {
  success: boolean;
  article?: Object;
  message?: string;
};

export default async function getArticle(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { slug } = req.query;
    console.log({ slug });
    if (slug === undefined || slug[0] === undefined || slug[1] === undefined) {
      throw new Error('Not Found');
    }
    const { rows, rowCount } = await getArticleBySlug({
      username: slug[0],
      slug: slug[1],
    });

    if (rowCount < 1) {
      throw new Error('Article not fount');
    }

    res.status(200).json({ success: true, article: rows[0] });
  } catch (error: any) {
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
}
