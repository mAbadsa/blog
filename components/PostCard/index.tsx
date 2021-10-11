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

import useStyles from "./styles";

const PostCard: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Card className={classes.root}>
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
            <Link href={`/#post-title`} passHref>
              <MUILink color="textPrimary">{"Matrix raining code effect using JavaScript"}</MUILink>
            </Link>
          </Typography>
          <Tags />
          <CardActions className={classes.postCardActions}>
            <div className={classes.postCard__details}>
              <Link href="/$post-title" passHref>
                <MUILink className={classes.reactionLink}>
                  <SVGIcons.Love />
                  <span className={classes.noReaction}>
                    {"11"}
                    <span>&nbsp; reactions</span>
                  </span>
                </MUILink>
              </Link>
              <Link href="/$post-title" passHref>
                <MUILink className={classes.reactionLink}>
                  <SVGIcons.Comment />
                  <span className={classes.noReaction}>
                    {"0"}
                    <span>&nbsp; add comment</span>
                  </span>
                </MUILink>
              </Link>
            </div>
            <div className={classes.postCard__save}>
              <small className="tertiary">2 min read</small>
              <Button className={classes.saveButton} size="small" variant="contained" color="gray" disableElevation>
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
