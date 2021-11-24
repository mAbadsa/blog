import { FC } from "react";

import { useTheme } from "@material-ui/styles";
import UploadCoverImage from "../UploadCoverImage";
import Title from "../PostTitle";
import useStyles from "./styles";

const Meta: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.Meta}>
      <UploadCoverImage />
      <Title />
    </div>
  );
};

export default Meta;
