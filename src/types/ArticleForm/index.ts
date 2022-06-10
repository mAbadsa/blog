export type ActionType = {
  type: string;
  payload?: any;
};

export type StateType = {
  uploadError: Boolean;
  uploadErrorMessage: null;
  uploadingImage: Boolean;
  insertionImageUrls: string | null;
};
