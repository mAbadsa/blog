import type { NextApiResponse, NextApiRequest, NextApiHandler } from "next";
import { getUserByUsername } from "../models/queries/users";

type Data = {
  success: boolean;
  data?: Object;
  error?: string;
};

const getUserProfile: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { username } = req.query;

  try {
    const { rows } = await getUserByUsername({ username });
    if (!rows[0]) {
      throw new Error("something went error");
    }
    return res.status(200).json({ success: true, data: rows[0] });
  } catch (error: any) {
    res
      .status(error.status || 500)
      .json({ success: false, error: error.message });
  }
};

export default getUserProfile;
