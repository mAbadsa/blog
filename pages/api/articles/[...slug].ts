import type { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../../lib/auth0';
import { getArticleBySlug } from '../models/queries/articles';
import { getLikeReactions } from '../models/queries/reactions';

type Data = {
  success: boolean;
  article?: Object;
  message?: string;
  count?: number;
};

export default async function getArticle(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { slug } = req.query;

    const { rows, rowCount } = await getArticleBySlug({
      slug: slug[1],
      username: slug[0],
    });

    if (rowCount < 1) {
      throw new Error('Article not fount');
    }

    const likes = await getLikeReactions({ articleId: rows[0].id });

    // if (likes.rowCount < 1) {
    //   throw new Error('something went wrong');
    // }

    res.status(200).json({
      success: true,
      article: { ...rows[0], likes: likes.rows },
      count: likes.rows.length,
    });
  } catch (error: any) {
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
}
