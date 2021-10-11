import React, { FC } from "react";
import Link from "next/link";
import { useTheme } from "@material-ui/core";
import { Link as MUILink } from "@material-ui/core";

import useStyles from "./styles";
import { ReactElement } from "react-transition-group/node_modules/@types/react";

interface tagsProps {
  id: string;
  tag: string;
}

const tags: tagsProps[] = [{id: "t-1", tag: "javascript"},{id: "t-2", tag: "Reactjs"},{id: "t-3", tag: "Nextjs"}];

const Tags: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const tagsElmts: ReactElement[] = tags.map(({id, tag}) => {
    return (
      <Link href="" passHref key={id}>
        <MUILink>
          <span>#</span>
          <span>{tag}</span>
        </MUILink>
      </Link>
    );
  })
  return (
    <div className={classes.root}>
      {tagsElmts}
    </div>
  );
};

export default Tags;