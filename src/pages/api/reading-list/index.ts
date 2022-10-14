import type { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '@lib/auth0';
import connection from '@pages/api/models/connection';
import {
  insertArticleToReadingList,
  getUserReadingList,
} from '@pages/api/models/queries/reading-list';

import { getUserByEmail } from '@pages/api/models/queries/users';

import { DataType } from '../type';

interface ReadingListDataType extends DataType {
  articles?: any[];
}

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<ReadingListDataType>) => {
    try {
      const me = auth0.getSession(req, res);
      if (req.method === 'POST') {
        const { articleId } = req.body;
        const { rowCount: resultCount, rows: user } = await getUserByEmail({
          email: me?.user?.email,
        });

        if (resultCount < 1) {
          throw new Error('something went wrong');
        }

        const { rowCount: insertCount } = await insertArticleToReadingList({ connection })({
          user_id: user[0].id,
          article_id: articleId,
        });
        if (insertCount < 1) {
          throw new Error('something went wrong');
        }
        return res.status(201).json({ success: true });
      } else {
        const { rowCount: resultCount, rows: user } = await getUserByEmail({
          email: me?.user?.email,
        });

        if (resultCount < 1) {
          throw new Error('something went wrong');
        }

        const { rowCount, rows } = await getUserReadingList({ connection })({
          user_id: user[0].id,
        });

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }

        return res.status(200).json({ success: true, articles: rows });
      }
    } catch (error) {}
  },
);
