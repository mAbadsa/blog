import { FC, ReactElement, ElementType, ReactNode } from "react";
import MUIButton from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core";

import useStyles from "./styles";

const Button: FC<{
  className?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
  size?: "large" | "medium" | "small";
  withIcon?: boolean | undefined;
  onClick?: (evt: any) => void;
}> = ({
  className,
  children,
  variant,
  color,
  withIcon,
  size = "medium",
  onClick,
  ...props
}): ReactElement<any, any> | null => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <MUIButton
      className={`${className} ${withIcon ? classes.withButton : ""}`}
      disableElevation
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
