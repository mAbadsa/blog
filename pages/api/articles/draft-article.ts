import { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';
import cryptoRandomString from 'crypto-random-string';
import auth0 from '../../../lib/auth0';
import { insertNewArticle } from '../models/queries/articles';
import { getUserByEmail } from '../models/queries/users';
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
        const cryptoNumber = cryptoRandomString({ length: 7, type: 'numeric' });
        const titleWithCryptoString = data.title + ' ' + cryptoString;
        const slug = slugify(titleWithCryptoString) + '-temp-slug-' + cryptoNumber;

        // check if use is exist in the database
        const { rows } = await getUserByEmail({ email: me?.user?.email });

        const { rowCount, rows: dbResult } = await insertNewArticle({ connection })({
          coverImage: data.coverImage,
          title: data.title,
          content: data.textareaValue,
          slug,
          tags: data.tags.join(', '),
          lastReading: new Date().toISOString(),
          userId: rows[0].id,
        });

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }

        return res.status(201).json({ statusCode: 201, success: true, article: dbResult[0] });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(error.status || 500).json({ success: false, error: error.message });
    }
  },
);
