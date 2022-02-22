import { FC, ReactElement, ElementType, ReactNode } from "react";
import MUIButton from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core";

import useStyles from "./styles";

const Button: FC<{
  className?: string;
  variant?: "text" | "outlined" | "contained" | undefined;
  color?: "inherit" | "primary" | "secondary" | "default" | undefined;
  size?: "large" | "medium" | "small";
  onClick?: (evt: any) => void;
}> = ({
  className,
  children,
  variant,
  color,
  size = "medium",
  onClick,
  ...props
}): ReactElement<any, any> | null => {
  return (
    <MUIButton
      className={className}
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
