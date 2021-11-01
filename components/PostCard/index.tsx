import React, { FC } from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core";
import { Link as MUILink } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
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
      <CardActionArea>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://placekitten.com/640/360"
          title="Contemplative Reptile"
        /> */}
        <PostCardAvatar />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={`/${username}/${slug}`} passHref>
              <MUILink color="textPrimary">{title}</MUILink>
            </Link>
          </Typography>
          <Tags tags={tags} />
          <CardActions className={classes.postCardActions}>
            <div className={classes.postCard__details}>
              <Link href="/$post-title" passHref>
                <MUILink className={classes.reactionLink}>
                  <SVGIcons.Love />
                  {reactions && (
                    <span className={classes.noReaction}>
                      {reactions}
                      <span>&nbsp; reactions</span>
                    </span>
                  )}
                </MUILink>
              </Link>
              <Link href="/$post-title" passHref>
                <MUILink className={classes.reactionLink}>
                  <SVGIcons.Comment />
                  {comments && <span className={classes.noReaction}>
                    {comments}
                    <span>&nbsp; add comment</span>
                  </span>}
                </MUILink>
              </Link>
            </div>
            <div className={classes.postCard__save}>
              <small className="tertiary">{lastRead} {lastRead >= 0 ? "mins" : "min"} read</small>
              <Button size="small" color="primary">
                Save
              </Button>
            </div>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostCard;
