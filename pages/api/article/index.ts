import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statusCode?: Number;
  success?: boolean;
  article: string;
};

const article = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  next: Function
) => {
  const data = req.body;
  console.log(data);
  return res
    .status(201)
    .json({ statusCode: 201, success: true, article: data });
};

export default article;
