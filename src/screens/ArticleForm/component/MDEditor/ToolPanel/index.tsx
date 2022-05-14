import { FC, useState, useRef, MouseEvent } from 'react';
import { useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import MoreVert from '@material-ui/icons/MoreVert';

import useStyles from './styles';
import Bold from './components/Bold';
import Italic from './components/Italic';
import Link from './components/Link';
import Heading from './components/Heading';
import Code from './components/Code';
import CodeBlock from './components/CodeBlock';
import OrderList from './components/OrderList';
import UnOrderList from './components/UnOrderList';
import Guide from './components/Guide';
import Quote from './components/Quote';
import UploadImage from './components/UploadImage';
import Underline from './components/Underline';
import StrikeThrough from './components/StrikeThrough';
import LineDivider from './components/LineDivider';

const ToolPanel: FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  // const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const body = useRef();
  function handleOpenExtraMenu() {
    setAnchorEl(null);
  }
  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  const open = Boolean(anchorEl);
  const id = open ? 'extra-item-popover' : undefined;
  return (
    <div className={classes.ToolPanel}>
      <div className={classes.mainItem}>
        <Bold></Bold>
        <Italic></Italic>
        <Link></Link>
        <OrderList></OrderList>
        <UnOrderList></UnOrderList>
        <Heading></Heading>
        <Quote></Quote>
        <Code></Code>
        <CodeBlock></CodeBlock>
        <UploadImage></UploadImage>
      </div>
      <div className={classes.extraItem}>
        <IconButton className={classes.moreBtn} aria-describedby={id} onClick={handleClick}>
          <MoreVert />
        </IconButton>
        <Popover
          id={id}
          open={open}
          onClose={handleOpenExtraMenu}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <div className={classes.hiddenMenu}>
            <Underline></Underline>
            <StrikeThrough></StrikeThrough>
            <LineDivider></LineDivider>
            <Guide></Guide>
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default ToolPanel;
