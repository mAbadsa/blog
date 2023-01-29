import { useState } from 'react';
import { RootState, usePostReactionMutation } from '@redux/index';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

export const usePostReadingList = ({
  articleId,
  readingListNumber,
  isListed,
}: {
  articleId: number;
  readingListNumber?: number;
  isListed: Boolean;
}) => {
  const [readingListCount, setReadingListCount] = useState<number | undefined>(
    readingListNumber || 0,
  );
  const [isInReadingList, setIsInReadingList] = useState<Boolean>(isListed);
  const [postReaction, { data: likes, isLoading, error }] = usePostReactionMutation();

  return [
    postReaction,
    setIsInReadingList,
    setReadingListCount,
    isInReadingList,
    readingListCount,
    likes,
    isLoading,
    error,
  ];
  // const handleReadingListReaction = async () => {
  //   try {
  //     if (!isUserLoading && !user) {
  //       return router.push('/api/auth/login');
  //     }
  //     const res = (await postReaction({
  //       reactableId: articleId,
  //       category: 'ReadingList',
  //       reactableType: 'Article',
  //     }).unwrap()) as any;
  //     if (!isLoading && !error) {
  //       setReadingListCount(res?.readingList.length);
  //       setIsInReadingList(
  //         res.readingList.some(
  //           (readingListItem: { user_id: Number | undefined }) =>
  //             readingListItem.user_id === state.user_id && state.isAuth === true,
  //         ),
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
};
