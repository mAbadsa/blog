import {FC} from 'react';
import Link from "next/link";

import { Link as MUILink, useTheme } from '@material-ui/core';

import useStyles from './styles';
let commentNo: Number = 2;

const HasTagCard: FC = () => {
  const theme = useTheme();
  const classes = useStyles({theme });
  return (
    <>
      <Link href="/PATH" passHref>
        <MUILink>
          {"TITLE"}
          <div className={classes.comment}>{commentNo === 1 ? "comment" : "comments"}</div>
        </MUILink>
      </Link>
    </>
  );
}

export default HasTagCard;
