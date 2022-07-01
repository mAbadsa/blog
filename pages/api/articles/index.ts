import { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';
import cryptoRandomString from 'crypto-random-string';
import auth0 from '../../../lib/auth0';
import { insertNewArticle, getAllArticle } from '../models/queries/articles';
import { getUserByEmail } from '../models/queries/users';
import { deleteArticle } from '../models/queries/articles';
import connection from '../models/connection';

type Data = {
  statusCode?: Number;
  success?: boolean;
  article?: Object;
  articles?: Object[];
  error?: string;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
      if (req.method === 'POST') {
        const { data } = req.body;
        // get the looged user session
        const me = auth0.getSession(req, res);
        const cryptoString = cryptoRandomString({ length: 4, type: 'base64' });
        const titleWithCryptoString = data.title + ' ' + cryptoString;
        const slug = slugify(titleWithCryptoString);

        // check if use is exist in the database
        const { rows } = await getUserByEmail({ email: me?.user?.email });
        const { rowCount, rows: dbResult } = await insertNewArticle({ connection })({
          coverImage: data.coverImage,
          title: data.title,
          content: data.textareaValue,
          slug,
          status: 'published',
          tags: data.tags.join(', '),
          lastReading: new Date().toISOString(),
          userId: rows[0].id,
        });

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }

        return res.status(201).json({ statusCode: 201, success: true, article: dbResult[0] });
      }
      if (req.method === 'DELETE') {
        const { slug } = req.body;

        const { rowCount, rows } = await deleteArticle({ connection })({ slug });

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }
        return res.status(200).json({ statusCode: 200, success: true });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(error.status || 500).json({ success: false, error: error.message });
    }
  },
);
