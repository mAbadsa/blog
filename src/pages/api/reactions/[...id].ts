import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../models/connection';

import { getLikeReactions } from '@pages/api/models/queries/reactions';
import { getArticleReadingList } from '@pages/api/models/queries/reading-list';

type Data = {
  success: Boolean;
  likes?: Object[];
  error?: string;
  readingList?: Array<any>;
};

const getArticleReactions = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const id: string = req.query.id as string;

    const { rows: likes } = await getLikeReactions({
      articleId: +id,
    });

    const { rows: readingList } = await getArticleReadingList({ connection })({ article_id: +id });

    return res.status(200).json({ success: true, likes, readingList });
  } catch (error: any) {
    return res.status(error.status || 500).json({ success: false, error: error.message });
  }
};

export default getArticleReactions;
