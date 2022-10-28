import { FC, ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { StyledContainer, StyledSpan } from './style';
import SVGIcons from '@components/SVG/SVGIcons';

const EmptyListMessage: FC = () => {
  return (
    <StyledContainer>
      <Typography variant="h2" style={{ color: '#3d3d3d' }}>
        Your reading list is empty
      </Typography>
      <Typography variant="body1" align="center" color="secondary">
        Click the{' '}
        <StyledSpan>
          bookmark reaction
          <SVGIcons.Bookmark />
        </StyledSpan>
        when viewing a post to add it to your reading list.
      </Typography>
    </StyledContainer>
  );
};

export default EmptyListMessage;
