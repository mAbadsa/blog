import type { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '@lib/auth0';
import connection from '@pages/api/models/connection';
import {
  insertArticleToReadingList,
  getUserReadingList,
  deleteArticleReadlinList,
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
      } else if (req.method === 'DELETE') {
        const { id } = req.body;
        const { rowCount: resultCount, rows: user } = await getUserByEmail({
          email: me?.user?.email,
        });

        if (resultCount < 1) {
          throw new Error('something went wrong');
        }

        const { rowCount: deleteCount } = await deleteArticleReadlinList({ connection })({ id });

        if (deleteCount < 1) {
          throw new Error('something went wrong');
        }

        const { rowCount, rows } = await getUserReadingList({ connection })({
          user_id: user[0].id,
        });

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }

        return res.status(200).json({ success: true, articles: rows });
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

        console.log(rows[0]);

        const readingList: any = rows.map(
          ({
            article_id,
            archive,
            r_id,
            username,
            profile_image,
            created_at,
            last_reading,
            tags,
            ...reset
          }) => {
            console.log({ tags });
            const tagsArr: Array<string> = tags.split(', ');
            let tagsList: Array<{ id: number; tag: string }> = tagsArr.map((tag, id) => ({
              id,
              tag,
            }));
            return {
              isArchived: archive,
              id: article_id,
              readingListId: r_id,
              author: username,
              avatarImage: profile_image,
              tags: tagsList,
              createdAt: created_at,
              lastReading: last_reading,
              ...reset,
            };
          },
        );

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }

        return res.status(200).json({ success: false, articles: readingList });
      }
    } catch (error) {}
  },
);
