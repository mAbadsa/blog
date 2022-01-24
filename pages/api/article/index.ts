import { NextApiRequest, NextApiResponse } from "next";
import auth0 from "../../../lib/auth0";

type Data = {
  statusCode?: Number;
  success?: boolean;
  article: string;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const data = req.body;
    console.log(data);
    try {
      const me = await auth0.getSession(req, res);
      console.log(me?.user);
      return res
        .status(201)
        .json({ statusCode: 201, success: true, article: data });
    } catch (error) {
      console.log(error);
    }
  }
);
