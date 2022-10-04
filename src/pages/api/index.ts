// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserData, addUser } from '@pages/api/models/queries/test';

type Data = {
  name: string;
  user: any[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await addUser();
  const { rows } = await getUserData();
  res.status(200).json({ name: 'John Doe', user: rows });
}
