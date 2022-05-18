import type { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../../lib/auth0';
import { addLike } from '../models/queries/reactions';
import { getUserByEmail } from '../models/queries/users';

type Data = {
  success: Boolean;
  data?: Object;
  error?: string;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { reactable_type, reactable_id, category } = req.body;
    try {
      const me = auth0.getSession(req, res);
      const { rowCount: resultCount, rows: user } = await getUserByEmail({
        email: me?.user?.email,
      });

      if (resultCount < 1) {
        throw new Error('something went wrong');
      }

      if (reactable_type === 'Article' && category === 'Like') {
        const { rowCount, rows } = await addLike({ userId: user[0].id, articleId: reactable_id });

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }

        return res.status(201).json({ success: true, data: rows[0] });
      }
    } catch (error: any) {
      return res.status(error.status || 500).json({ success: false, error: error.message });
    }
  },
);
