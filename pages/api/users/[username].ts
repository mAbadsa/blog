import type { NextApiResponse, NextApiRequest } from "next";
import { QueryResultRow } from "pg";
import auth0 from "../../../lib/auth0";
import { getUserByUsername } from "../models/queries/users";

type Data = {
  success: boolean;
  data?: Object;
  error?: string;
};

export default auth0.withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { username } = req.query;
    try {
      if (req.method === "POST") {
      } else if (req.method === "GET") {
        const { rows } = await getUserByUsername({ username });
        if (!rows[0]) {
          throw new Error("something went error");
        }
        return res.status(200).json({ success: true, data: rows[0] });
      }
    } catch (error: any) {
      res
        .status(error.status || 500)
        .json({ success: false, error: error.message });
    }
  }
);
