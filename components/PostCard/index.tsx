import React, { FC } from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core";
import { Link as MUILink } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SVGIcons from "../SVG/SVGIcons";

import PostCardAvatar from "./PostCardAvatar";
import Tags from "./Tags";
import PostsType from "../interface/Posts";

import useStyles from "./styles";

const PostCard: FC<{ post: PostsType }> = ({ post }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const {
    title,
    slug,
    reactions,
    comments,
    headImg,
    createdAt,
    tags,
    lastRead,
    userData: { username, joinedDate, avatar, email, location, work },
  } = post;

  return (
    <Card className={classes.PostCard}>
      <PostCardAvatar username={username} date={createdAt} slug={slug} />
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={`/${username}/${slug}`} passHref>
              <MUILink color="textPrimary">{title}</MUILink>
            </Link>
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.postCardActions}>
        <Tags tags={tags} />
        <div className={classes.postCard__details}>
          <div className={classes.postCardActions__reactions}>
            {reactions > 0 && (
              <Link href="/$post-title" passHref>
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
              <Link href="/$post-title" passHref>
                <MUILink className={classes.reactionLink}>
                  <SVGIcons.Comment />
                  <span className={classes.noReaction}>{comments}&nbsp;{`${comments === 1 ? 'comment' : 'comments'}`}</span>
                </MUILink>
              </Link>
            )}
          </div>
          <div className={classes.postCard__save}>
            <small className="tertiary">
              {lastRead} {lastRead >= 0 ? "mins" : "min"} read
            </small>
            <Button size="small" color="primary">
              Save
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
