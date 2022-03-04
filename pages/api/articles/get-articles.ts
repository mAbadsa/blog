import type { NextApiResponse, NextApiHandler, NextApiRequest } from "next";
import { getAllArticle } from "../models/queries/articles";

const getArticles: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { limit, offset } = req.query;
    console.log({ limit, offset });
    const { rows, rowCount } = await getAllArticle({
      limit: +limit,
      offset: +offset,
    });
    console.log({ rows });
    console.log({ rowCount });
    return res
      .status(200)
      .json({ statusCode: 200, success: true, articles: rows });
  } catch (error: any) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ success: false, error: error.message });
  }
};

export default getArticles;
