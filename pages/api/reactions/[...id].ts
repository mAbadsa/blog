import type { NextApiRequest, NextApiResponse } from 'next';

import { getLikeReactions } from '../models/queries/reactions';

const getArticleReactions = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    console.log({ id });

    const { rowCount, rows } = await getLikeReactions({
      articleId: +id,
    });

    console.log(rowCount);
    console.log(rows.length);

    return res.status(200).json({ success: true, likes: rows });
  } catch (error: any) {
    return res.status(error.status || 500).json({ success: false, error: error.message });
  }
};

export default getArticleReactions;
