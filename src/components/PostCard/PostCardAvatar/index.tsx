import { FC } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { useTheme, Link as MUILink } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import getTime from '../../../helpers/getTime';

import useStyles from './styles';

const PostCardAvatar: FC<{
  username: string;
  date: string;
  slug: string;
  avatar: string;
}> = ({ username, date, slug, avatar }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  console.log(avatar);
  return (
    <div className={classes.PostCardAvatar}>
      <Link href={`/${username}`} passHref>
        {avatar.length > 0 ? (
          <Avatar aria-label="user-avatar" className={classes.avatar} alt={username} src={avatar} />
        ) : (
          <Avatar aria-label="user-avatar" className={classes.avatar}>
            {!avatar && username[0].toUpperCase()}
          </Avatar>
        )}
      </Link>
      <div className={classes.avatarMeta}>
        <Button className={classes.username}>{username}</Button>
        <Link href={`/${username}/${slug}`} passHref>
          <MUILink className={classes.avatarMetaPostLink}>
            <time className={classes.avatarMetaTime} dateTime="$2021-10-1T22:15:00">
              {dayjs(date).format('MMM DD')} {' ('} {getTime(date)} {' ago) '}
            </time>
          </MUILink>
        </Link>
      </div>
    </div>
  );
};

export default PostCardAvatar;
