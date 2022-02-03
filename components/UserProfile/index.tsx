import { FC } from "react";
import { useTheme } from "@material-ui/core";
import Image from "next/image";
import useStyles from "./styles";

const UserProfile: FC<{ userData: any }> = ({ userData }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.UserProfile}>
      <div className={classes.profile}>
        <div className={classes.layout}>
          <header className={classes.profileHeader}>
            <div className={classes.headerTop}>
              <div className={classes.profileHeaderAvatar}>
                <Image
                  className={classes.profileHeaderAvatar_image}
                  src={userData.data.profile_image}
                  alt={userData.data.name}
                  width="120"
                  height="120"
                />
              </div>
              <div className={classes.headerAction}></div>
            </div>
          </header>
        </div>
      </div>
      {
        <pre>
          <code>{JSON.stringify(userData.data, null, 4)}</code>
        </pre>
      }
    </div>
  );
};

export default UserProfile;
