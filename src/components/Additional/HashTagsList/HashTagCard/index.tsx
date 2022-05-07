import { FC } from "react";
import Link from "next/link";

import { Link as MUILink, useTheme } from "@material-ui/core";

import hashTagCardProps from "../../../interface/HashTagCard";
import useStyles from "./styles";

const HashTagCard: FC<hashTagCardProps> = ({ url, title, commentsNo }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.HashTagCard}>
      <Link href="/PATH" passHref>
        <MUILink>
          {title}
          <div className={classes.comment}>
            {commentsNo} {commentsNo === 1 ? "comment" : "comments"}
          </div>
        </MUILink>
      </Link>
    </div>
  );
};

export default HashTagCard;
