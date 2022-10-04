import type { NextApiRequest, NextApiResponse } from 'next';

import { getLikeReactions } from '@pages/api/models/queries/reactions';

const getArticleReactions = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const { rowCount, rows } = await getLikeReactions({
      articleId: +id,
    });

    return res.status(200).json({ success: true, likes: rows });
  } catch (error: any) {
    return res.status(error.status || 500).json({ success: false, error: error.message });
  }
};

export default getArticleReactions;
