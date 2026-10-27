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

    if (slug === undefined || slug[0] === undefined || slug[1] === undefined) {
      throw Object.assign(new Error('Not Found'), { status: 404 });
    }
    const { rows, rowCount } = await getArticleBySlug({
      username: slug[0],
      slug: slug[1],
    });

    if (!rows[0] || rowCount < 1) {
      throw Object.assign(new Error('Article not found'), { status: 404 });
    }

    res.status(200).json({ success: true, article: rows[0] });
  } catch (error: any) {
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
}
