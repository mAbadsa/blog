import { FC, ReactElement, ReactPropTypes } from "react";
import MUIButton from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core";

import useStyles from "./styles";

const Button: FC<{
  className?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
}> = ({
  className,
  children,
  variant,
  color,
  ...props
}): ReactElement<any, any> | null => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <MUIButton
      className={`${classes.MUIButton} ${className}`}
      disableElevation
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
