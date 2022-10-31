import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import connection from '@pages/api/models/connection';
import { getUserArticles } from '@pages/api/models/queries/users';
import auth0 from '@lib/auth0';

type Data = {
  success: boolean;
  data?: Object;
  error?: string;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const username = req.query.username as string | string[];
    try {
      const articles = await getUserArticles({ connection })({ username });
      if (articles.rowCount < 1) {
        throw Error('something went error');
      }

      console.log(articles.rows[0]);

      return res.status(200).json({ success: true, data: [...articles.rows] });
    } catch (error: any) {
      return res.status(error.status || 500).json({ success: false, error: error.message });
    }
  },
);

// const getArticles: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
//   try {
//   } catch (error: any) {}
// };
