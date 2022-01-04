import type { NextApiRequest, NextApiResponse } from "next";
import cloudinary from "../../../utils/cloudinary";

type Data = {
  statusCode?: Number;
  success?: boolean;
  imageUrl: string;
};

export default async function uploadCoverImage(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
  next: Function
) {
  const { data } = req.body;
  try {
    const { url } = await cloudinary.v2.uploader.upload(data, {
      upload_preset: "slbhisgh",
    });
    console.log(url);
    res.status(200).json({
      statusCode: 200,
      success: true,
      imageUrl: url,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
}
