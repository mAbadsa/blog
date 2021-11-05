import { FC } from "react";
import Link from 'next/link'
import { useTheme, Link as MUILink } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import useStyles from "./styles";

const PostCardAvatar: FC<{username: string, date: string, slug: string}> = ({username, date, slug}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.PostCardAvatar}>
      <Avatar aria-label="user-avatar" className={classes.avatar}>
        {username[0].toUpperCase()}
      </Avatar>
      <div className={classes.avatarMeta}>
        <Button className={classes.username}>{username}</Button>
        <Link href={`/${username}/${slug}`} passHref>
          <MUILink className={classes.avatarMetaPostLink}>
            <time className={classes.avatarMetaTime} dateTime="$2021-10-1T22:15:00">{date}</time>
          </MUILink>
        </Link>
      </div>
    </div>
  );
};

export default PostCardAvatar;
