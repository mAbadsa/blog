export type ReactionPayload = { reactableId: number; category: string; reactableType: string };

type AuthState = {
  isAuth: boolean;
  user_id: Number | undefined;
  username: String | undefined;
};

export type ArticleState = {};
export type ReadingListState = {
  readingListCount: number;
};
