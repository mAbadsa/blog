import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme, Link as MUILink } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useUser } from "@auth0/nextjs-auth0";
import SVGIcons from "../SVG/SVGIcons";

import useStyles from "./styles";

const UserProfile: FC<{ userData: any }> = ({ userData }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { error, isLoading, user } = useUser();

  console.log({ user });

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
              <div className={classes.headerAction}>
                {!isLoading &&
                typeof user !== "undefined" &&
                user.nickname === userData.data.username ? (
                  <Button
                    className={classes.headerActionBtn}
                    href={"/settings"}
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <Button className={classes.headerActionBtn}>Follow</Button>
                )}
              </div>
            </div>
            <div className={classes.profileHeaderDetails}>
              <Typography component="h1">{userData?.data?.name}</Typography>
              <Typography>
                {userData?.data?.bio
                  ? userData?.data?.bio
                  : "404 bio not found"}
              </Typography>
              <div className={classes.profileHeaderMeta}>
                {userData?.data?.location && (
                  <span>
                    <SVGIcons.Location />
                    {userData?.data?.location}
                  </span>
                )}
                {userData?.data?.createdAt && (
                  <span>
                    <SVGIcons.Joined />
                    {userData?.data?.createdAt}
                  </span>
                )}
                {userData?.data?.email && (
                  <Link href={`mailto:${userData?.data?.email}`} passHref>
                    <MUILink underline="none">
                      <SVGIcons.Email /> {userData?.data?.email}
                    </MUILink>
                  </Link>
                )}
                {userData?.data?.githubAccount && (
                  <Link href={userData?.data?.githubAccount} passHref>
                    <MUILink underline="none">
                      <SVGIcons.Github /> {userData?.data?.githubAccount}
                    </MUILink>
                  </Link>
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
