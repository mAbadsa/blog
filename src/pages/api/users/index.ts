import type { NextApiRequest, NextApiResponse } from 'next';
import auth0 from '../../../lib/auth0';
import { getUserByEmail } from '../models/queries/users';

type Data = {
  success: Boolean;
  data?: Object;
  error?: string;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { email } = req.body;
    try {
      const user = await getUserByEmail({ email });
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error: any) {
      res.status(error.status || 500).json({ success: false, error: error.message });
    }
  },
);
