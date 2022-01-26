import { NextApiRequest, NextApiResponse } from "next";
import auth0 from "../../../lib/auth0";
import { insertNewArticle } from "../models/queries/articles";
import { getUserByEmail } from "../models/queries/users";

type Data = {
  statusCode?: Number;
  success?: boolean;
  article: Object;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    try {
      if (req.method === "POST") {
        const { data } = req.body;
        // get the looged user session
        const me = await auth0.getSession(req, res);

        // check if use is exist in the database
        const { rows } = await getUserByEmail({ email: me?.user?.email });

        const { rowCount, rows: dbResult } = await insertNewArticle({
          coverImage: data.coverImage,
          title: data.title,
          content: data.textareaValue,
          slug: "",
          tags: "data.tags",
          lastReading: new Date().toISOString(),
          userId: rows[0].id,
        });

        if (rowCount < 1) {
          throw new Error("something went wrong");
        }

        return res
          .status(201)
          .json({ statusCode: 201, success: true, article: dbResult[0] });
      } else if (req.method === "GET") {
        return res
          .status(201)
          .json({ statusCode: 201, success: true, article: [] });
      }
    } catch (error) {
      console.log(error);
    }
  }
);
