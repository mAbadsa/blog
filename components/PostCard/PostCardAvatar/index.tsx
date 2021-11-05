import { FC } from "react";
import Link from 'next/link'
import { useTheme, Link as MUILink } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import useStyles from "./styles";

const PostCardAvatar: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.PostCardAvatar}>
      <Avatar aria-label="user-avatar" className={classes.avatar}>
        R
      </Avatar>
      <div className={classes.avatarMeta}>
        <Button className={classes.username}>{"User Name"}</Button>
        <Link href="/$username/$post_sluge" passHref>
          <MUILink className={classes.avatarMetaPostLink}>
            <time className={classes.avatarMetaTime} dateTime="$2021-10-1T22:15:00">{"Oct 1 (1 day ago)"}</time>
          </MUILink>
        </Link>
      </div>
    </div>
  );
};

export default PostCardAvatar;
