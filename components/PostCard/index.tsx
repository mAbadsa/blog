import React, { FC } from "react";
import Link from 'next/link';
import { useTheme } from "@material-ui/core";
import { Link as MUILink } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const PostCard: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://placekitten.com/640/360"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div>
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            <Link href={`/#post-title`} passHref>
              <MUILink color="textPrimary" >{"Post title"}</MUILink>
            </Link>
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            tags
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.postCardActions}>
        <div className={classes.postCard__details}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </div>
        <div className={classes.postCard__save}>
          <Button size="small" color="primary">
            Save
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;
