import type { NextApiResponse, NextApiHandler, NextApiRequest } from 'next';
import { getAllArticle } from '@pages/api/models/queries/articles';

const getArticles: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { limit, offset } = req.query;
    const { rows } = await getAllArticle({
      limit: Number(limit) || 15,
      offset: Number(offset) || 0,
    });
    return res.status(200).json({ statusCode: 200, success: true, articles: rows });
  } catch (error: any) {
    console.log(error);
    return res.status(error.status || 500).json({ success: false, error: error.message });
  }
};

export default getArticles;
