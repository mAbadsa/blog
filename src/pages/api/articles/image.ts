import type { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import cloudinary from '../../../utils/cloudinary';
import auth0 from '../../../lib/auth0';

type Data = {
  statusCode?: Number;
  success?: boolean;
  imageUrl?: string;
  message?: string;
};

export default auth0.withApiAuthRequired(async function uploadCoverImage(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { data } = req.body;
  try {
    const { url } = await cloudinary.v2.uploader.upload(data, {
      upload_preset: 'slbhisgh',
    });

    return res.status(200).json({
      statusCode: 200,
      success: true,
      imageUrl: url,
      message: 'Upload image successfully',
    });
  } catch (error: any) {
    return res
      .status(error.status || 500)
      .json({ statusCode: 200, success: false, message: error.message });
  }
});
