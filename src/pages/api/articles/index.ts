import { NextApiRequest, NextApiResponse } from 'next';
import slugify from 'slugify';
import cryptoRandomString from 'crypto-random-string';
import auth0 from '@lib/auth0';
import { insertNewArticle, updateArticle } from '@pages/api/models/queries/articles';
import { getUserByEmail } from '@pages/api/models/queries/users';
import { deleteArticle } from '@pages/api/models/queries/articles';
import connection from '@pages/api/models/connection';

type Data = {
  statusCode?: Number;
  success?: boolean;
  article?: Object;
  articles?: Object[];
  error?: string;
};

// Resolves the logged-in user's DB id. Writes are scoped to it so users can only touch their own articles.
async function getCurrentUserId(req: NextApiRequest, res: NextApiResponse) {
  const me = auth0.getSession(req, res);
  const { rows } = await getUserByEmail({ email: me?.user?.email });
  if (!rows[0]) {
    throw Object.assign(new Error('User not found'), { status: 403 });
  }
  return rows[0].id as number;
}

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
      if (req.method === 'POST') {
        const { data } = req.body;
        // get the looged user session
        const me = auth0.getSession(req, res);
        const cryptoString = cryptoRandomString({ length: 4, type: 'base64' });
        const titleWithCryptoString = data.title + ' ' + cryptoString;
        const slug = slugify(titleWithCryptoString.toLowerCase());

        // check if use is exist in the database
        const { rows } = await getUserByEmail({ email: me?.user?.email });
        const { rowCount, rows: dbResult } = await insertNewArticle({ connection })({
          coverImage: data.coverImage,
          title: data.title,
          content: data.textareaValue,
          slug,
          tempSlug: `temp_${slug}`,
          status: 'published',
          tags: data.tags.join(', '),
          lastReading: new Date().toISOString(),
          userId: rows[0].id,
        });

        if (rowCount < 1) {
          throw new Error('something went wrong');
        }

        return res.status(201).json({ statusCode: 201, success: true, article: dbResult[0] });
      } else if (req.method === 'PUT') {
        const { data } = req.body;
        const userId = await getCurrentUserId(req, res);

        const { rowCount, rows: dbResult } = await updateArticle({ connection })({
          title: data.title,
          slug: data.slug,
          tags: data.tags.join(', '),
          content: data.textareaValue,
          coverImage: data.coverImage,
          userId,
        });

        // 404 for both "missing" and "not yours" so the response doesn't reveal which slugs exist
        if (rowCount < 1) {
          throw Object.assign(new Error('Article not found'), { status: 404 });
        }

        return res.status(200).json({ statusCode: 200, success: true, article: dbResult[0] });
      } else if (req.method === 'DELETE') {
        const { slug } = req.body;
        const userId = await getCurrentUserId(req, res);

        const { rowCount, rows } = await deleteArticle({ connection })({ slug, userId });

        if (rowCount < 1) {
          throw Object.assign(new Error('Article not found'), { status: 404 });
        }
        return res.status(200).json({ statusCode: 200, success: true });
      }
    } catch (error: any) {
      return res.status(error.status || 500).json({ success: false, error: error.message });
    }
  },
);
