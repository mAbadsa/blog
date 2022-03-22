import connection from "../connection";

const getUserData = () => {
  const sql = {
    text: "SELECT * FROM users;",
  };
  return connection.query(sql);
};

const addUser = () => {
  const sql = {
    text: "INSERT INTO users (username, name, bio, email) VALUES ('mabadsa', 'Muhammad Elabadsa', '...', 'moh1@gmail.com');",
  };
  return connection.query(sql);
};

export { getUserData, addUser };
