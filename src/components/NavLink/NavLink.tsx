import React, { FC, ForwardedRef, ReactElement, ReactNode } from 'react';
import Link from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

import useStyles from './styles';

export type NavLinkType = {
  className?: string;
  children: ReactNode | string;
  variant?: 'inherit' | Variant | undefined;
  outlined?: boolean | undefined;
  textSecondary?: boolean | undefined;
  textPrimary?: boolean | undefined;
  icon?: boolean | undefined;
  color?:
    | 'inherit'
    | 'initial'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    | undefined;
  underline?: 'always' | 'hover' | 'none';
};

const NavLink: FC<NavLinkType> = React.forwardRef(
  (
    {
      className,
      children,
      variant,
      underline = 'hover',
      color,
      outlined,
      textSecondary,
      textPrimary,
      icon,
      ...props
    },
    ref,
  ): ReactElement<any, any> | null => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    return (
      <Link
        className={`${className} ${outlined ? classes.outlined : ''} ${
          textSecondary ? classes.textSecondary : ''
        } ${textPrimary ? classes.textPrimary : ''}
      ${icon ? classes.withIcon : ''}`}
        innerRef={ref}
        color={color}
        variant={variant}
        underline={underline}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = 'NavLink';

export default NavLink;
