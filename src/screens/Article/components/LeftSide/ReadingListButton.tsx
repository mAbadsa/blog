import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

import { RootState } from '@redux/index';
import { StyledButton, StyledIconContainer, StyledReactCount } from './styles';
import SVGIcons from '@components/SVG/SVGIcons';
import { usePostReadingList } from './hooks';

const ReadingListButton: FC<{
  articleId: number;
  readingListNumber: number;
  isListed: Boolean;
}> = ({ articleId, readingListNumber, isListed }) => {
  const state = useSelector((state: RootState) => state.auth) as any;
  const { user, isLoading: isUserLoading } = useUser();
  const router = useRouter();
  const [
    postReaction,
    setIsInReadingList,
    setReadingListCount,
    isInReadingList,
    readingListCount,
    isLoading,
    error,
  ] = usePostReadingList({
    articleId,
    readingListNumber,
    isListed,
  });

  const handleReadingListReaction = async () => {
    try {
      if (!isUserLoading && !user) {
        return router.push('/api/auth/login');
      }
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
