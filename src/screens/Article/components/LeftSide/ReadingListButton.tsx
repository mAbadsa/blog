import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { usePostReactionMutation } from '@redux/index';
import { RootState } from '@redux/index';
import { StyledButton, StyledIconContainer, StyledReactCount } from './styles';
import SVGIcons from '@components/SVG/SVGIcons';

const ReadingListButton: FC<{
  articleId: number;
  readingListNumber: number;
  isListed: Boolean;
}> = ({ articleId, readingListNumber, isListed }) => {
  const state = useSelector((state: RootState) => state.auth) as any;
  const [readingListCount, setReadingListCount] = useState<number>(readingListNumber);
  const [isInReadingList, setIsInReadingList] = useState<Boolean>(isListed);
  const [postReaction, { data: likes, isLoading, error }] = usePostReactionMutation();

  const handleReadingListReaction = async () => {
    try {
      const res = (await postReaction({
        reactableId: articleId,
        category: 'ReadingList',
        reactableType: 'Article',
      }).unwrap()) as any;
      if (!isLoading && !error) {
        setReadingListCount(res?.readingList.length);
        setIsInReadingList(
          res.readingList.some(
            (readingListItem: { user_id: Number | undefined }) =>
              readingListItem.user_id === state.user_id && state.isAuth === true,
          ),
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledButton
      className="bookmark_btn"
      variant="text"
      color="secondary"
      onClick={handleReadingListReaction}
      isInReadingList={isInReadingList}
    >
      <StyledIconContainer className="bookmark-icon_container">
        {isInReadingList ? <SVGIcons.FilledBookmark /> : <SVGIcons.Bookmark />}
      </StyledIconContainer>
      <StyledReactCount className="reaction-count_bookmark">{readingListCount}</StyledReactCount>
    </StyledButton>
  );
};

export default ReadingListButton;
