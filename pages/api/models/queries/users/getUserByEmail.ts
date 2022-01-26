import { QueryConfig, QueryResult } from "pg";
import connection from "../../connection";

type UserType = {
  email: string;
};

const getUserByEmail = <T extends UserType>({
  email,
}: T): Promise<QueryResult<any>> => {
  console.log({ email });
  const sql: QueryConfig<any[]> = {
    text: `SELECT * FROM users WHERE email = $1;`,
    values: [email],
  };
  return connection.query(sql);
};

export default getUserByEmail;
