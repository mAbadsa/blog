import auth0 from '../../../lib/auth0';
import { insertNewUser, getUserByEmail } from '../models/queries/users';

export default async function callback(req, res) {
  try {
    await auth0.handleCallback(req, res, { redirectTo: '/' });
    // get use session
    const { user } = auth0.getSession(req, res);

    // check is user already have had account
    const { rows } = await getUserByEmail({ email: user?.email });

    // if user not exist, we will create new one
    if (!rows[0]) {
      const { rowCount } = await insertNewUser({
        username: user.nickname,
        name: user.name,
        email: user.email,
        profileImage: user.picture,
      });
      if (rowCount < 1) {
        throw new Error('Something went wrong');
      }
    }
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }
}
