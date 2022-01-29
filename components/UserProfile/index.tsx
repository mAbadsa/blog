import { FC } from "react";

const UserProfile: FC<{ userData: any }> = ({ userData }) => {
  return (
    <div>
      {
        <pre>
          <code>{JSON.stringify(userData.data, null, 4)}</code>
        </pre>
      }
    </div>
  );
};

export default UserProfile;
