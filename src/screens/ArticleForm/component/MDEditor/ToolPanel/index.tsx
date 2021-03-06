import { FC, useState, MouseEvent } from 'react';
import { useTheme } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import MoreVert from '@material-ui/icons/MoreVert';
import { useMediaQuery } from '@material-ui/core';

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

const ToolPanel: FC<{
  setPanelValue: React.Dispatch<React.SetStateAction<string>>;
  setRef: (ref: React.RefObject<HTMLTextAreaElement>) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement>;
}> = ({ setPanelValue, setRef, textareaRef }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const matches = useMediaQuery('(min-width:768px)');
  console.log(matches);
  // const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'extra-item-popover' : undefined;

  function handleOpenExtraMenu() {
    setAnchorEl(null);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

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
        <UploadImage
          setImageUrl={setPanelValue}
          setRef={setRef}
          textareaRef={textareaRef}
        ></UploadImage>
        {matches && (
          <IconButton className={classes.moreBtn} aria-describedby={id} onClick={handleClick}>
            <MoreVert />
          </IconButton>
        )}
        {!matches && (
          <>
            <Underline></Underline>
            <StrikeThrough></StrikeThrough>
            <LineDivider></LineDivider>
            <Guide></Guide>
          </>
        )}
      </div>
      <div className={classes.extraItem}>
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
