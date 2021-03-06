import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from '@material-ui/core';
import { Link as MUILink } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import getTime from '../../helpers/getTime';

import SVGIcons from '../SVG/SVGIcons';
import PostCardAvatar from './PostCardAvatar';
import Tags from './Tags';
import ArticlesType from '../interface/Articles';
import { shimmer, toBase64 } from '../../helpers/image/shimmer';

import useStyles from './styles';

const PostCard: FC<{ article: ArticlesType; showCoverImage: boolean }> = ({
  article,
  showCoverImage,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const {
    title,
    slug,
    reactions,
    comments,
    coverImage,
    createdAt,
    tags,
    lastReading,
    userData: { username, joinedDate, profileImage, email, location, work },
  } = article;

  return (
    <article className={classes.Article}>
      <Card className={classes.PostCard} elevation={0}>
        {showCoverImage && (
          <Image
            src={coverImage}
            alt="cover image"
            width="100"
            height="42"
            sizes="100vw"
            objectFit="cover"
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(100, 42))}`}
          />
        )}
        <div className={classes.card_body}>
          <PostCardAvatar username={username} date={createdAt} slug={slug} avatar={profileImage} />
          <CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.linkTypography} gutterBottom component="h3">
                <Link href={`/${username}/${slug}`} passHref>
                  <MUILink className={classes.title_link} color="textPrimary">
                    {title}
                  </MUILink>
                </Link>
              </Typography>
            </CardContent>
          </CardActionArea>
          <div className={classes.postCardActions}>
            <Tags tags={tags} />
            <div className={classes.postCard__details}>
              <div className={classes.postCardActions__reactions}>
                {reactions > 0 && (
                  <Link href={`${username}/${title}`} passHref>
                    <MUILink className={classes.reactionLink}>
                      <SVGIcons.Love />
                      <span className={classes.noReaction}>
                        {reactions}
                        <span>&nbsp; {`${reactions === 1 ? 'reaction' : 'reactions'}`}</span>
                      </span>
                    </MUILink>
                  </Link>
                )}
                {comments > 0 && (
                  <Link href={`${username}/${title}`} passHref>
                    <MUILink className={classes.reactionLink}>
                      <SVGIcons.Comment />
                      <span className={classes.noReaction}>
                        {comments}&nbsp;
                        {`${comments === 1 ? 'comment' : 'comments'}`}
                      </span>
                    </MUILink>
                  </Link>
                )}
              </div>
              <div className={classes.postCard__save}>
                <small className={classes.tertiary}>{getTime(lastReading.toString())}</small>
                <Button
                  className={classes.saveButton}
                  size="small"
                  color="secondary"
                  variant="contained"
                  disableElevation
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default PostCard;
