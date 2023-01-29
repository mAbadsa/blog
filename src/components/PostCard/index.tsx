import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from '@material-ui/core';
import { Link as MUILink } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import getTime from '@helpers/getTime';
import { RootState, usePostReactionMutation } from '@redux/index';
import SVGIcons from '@components/SVG/SVGIcons';
import { useUser } from '@auth0/nextjs-auth0';
import ArticlesType from '@components/interface/Articles';
import { shimmer, toBase64 } from '@helpers/image/shimmer';
import { useGetReactionsQuery } from '@redux/index';

import Tags from './Tags';
import PostCardAvatar from './PostCardAvatar';
import { usePostReadingList } from '@screens/Article/components/LeftSide/hooks';
import useStyles from './styles';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const PostCard: FC<{ article: ArticlesType; showCoverImage: boolean }> = ({
  article,
  showCoverImage,
}) => {
  const [isInReadingList, setIsInReadingList] = useState<Boolean>(false);
  const state = useSelector((state: RootState) => state.auth) as any;
  const { user, isLoading: isUserLoading } = useUser();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const router = useRouter();
  const { data: readingList, isLoading: readingListLoading } = useGetReactionsQuery({
    articleId: article.id,
  });

  const [postReaction, setReadingListCount, readingListCount, isLoading, error] =
    usePostReadingList({
      articleId: article.id,
      isListed: isInReadingList,
    });

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

  const handleReadingListReaction = async () => {
    try {
      if (!isUserLoading && !user) {
        return router.push('/api/auth/login');
      }
      const res = (await postReaction({
        reactableId: article.id,
        category: 'ReadingList',
        reactableType: 'Article',
      }).unwrap()) as any;
      if (!isLoading && !error) {
        setReadingListCount(res?.readingList.length);
        setIsInReadingList(
          res.readingList.some(
            (readingListItem: { user_id: Number | undefined }) =>
              readingListItem.user_id === state.user_id && state.isAuth === true,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsInReadingList(
      readingList?.readingList.some(
        (readingListItem: { user_id: Number | undefined }) =>
          readingListItem.user_id === state.user_id && state.isAuth === true,
      ),
    );
  }, [readingList, setIsInReadingList]);

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
                  <Link href={`${username}/${slug}`} passHref>
                    <MUILink className={classes.reactionLink}>
                      <SVGIcons.Love />
                      <span className={classes.noReaction}>
                        {reactions}
                        <span>&nbsp; {`${reactions === 1 ? 'reaction' : 'reactions'}`}</span>
                      </span>
                    </MUILink>
                  </Link>
                )}
                <Link href={`${username}/${slug}`} passHref>
                  <MUILink className={classes.reactionLink}>
                    <SVGIcons.Comment />
                    {comments > 0 ? (
                      <span className={classes.noReaction}>
                        {comments}&nbsp;
                        {`${comments === 1 ? 'comment' : 'comments'}`}
                      </span>
                    ) : (
                      <span>{'Add comment'}</span>
                    )}
                  </MUILink>
                </Link>
              </div>
              <div className={classes.postCard__save}>
                <small className={classes.tertiary}>{getTime(lastReading.toString())}</small>
                <Button
                  className={classes.saveButton}
                  size="small"
                  onClick={handleReadingListReaction}
                  color="secondary"
                  variant="contained"
                  disableElevation
                >
                  {isInReadingList ? <SVGIcons.FilledBookmark /> : <SVGIcons.Bookmark />}
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
