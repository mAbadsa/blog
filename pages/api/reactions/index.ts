import type { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../../lib/auth0';
import {
  addLike,
  getLikeByUserAndArticleId,
  deleteLikeReaction,
  getLikeReactions,
} from '../models/queries/reactions';
import { getUserByEmail } from '../models/queries/users';

type Data = {
  success: Boolean;
  data?: Object;
  likes?: Object[];
  error?: string;
  result?: string;
  category?: string;
  count?: number;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { reactable_type, reactable_id, category } = req.body;
    try {
      const me = auth0.getSession(req, res);
      console.log({ me });
      const { rowCount: resultCount, rows: user } = await getUserByEmail({
        email: me?.user?.email,
      });
      console.log({ user });

      if (resultCount < 1) {
        throw new Error('User does not exist!');
      }
      if (reactable_type === 'Article' && category === 'Like') {
        const { rowCount: isLiked } = await getLikeByUserAndArticleId({
          userId: user[0].id,
          articleId: reactable_id,
        });

        if (isLiked < 1) {
          const { rowCount, rows } = await addLike({
            userId: user[0].id,
            articleId: reactable_id,
          });

          if (rowCount < 1) {
            throw new Error('something went wrong');
          }

          const likes = await getLikeReactions({ articleId: reactable_id });

          if (likes.rowCount < 1) {
            throw new Error('something went wrong');
          }

          return res.status(201).json({
            success: true,
            result: 'create',
            category: 'like',
            count: likes.rows.length,
          });
        }

        const { rowCount: likeDeleted } = await deleteLikeReaction({
          userId: user[0].id,
          articleId: reactable_id,
        });

        if (likeDeleted < 1) {
          throw new Error('something went wrong');
        }

        const likes = await getLikeReactions({ articleId: reactable_id });

        return res.status(200).json({
          success: true,
          result: 'destroty',
          category: 'like',
          count: likes.rows.length,
        });
      }
    } catch (error: any) {
      return res.status(error.status || 500).json({ success: false, error: error.message });
    }
  },
);
