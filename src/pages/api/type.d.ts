interface DataType {
  success: Boolean;
  data?: Object;
  likes?: Object[];
  error?: string;
  result?: string;
  category?: string;
}

interface QueryUserDataType {
  user_id?: number;
  username?: string | string[];
}

interface QueryArticleDataType {
  article_id?: number;
  slug?: string | string[];
}

export { DataType, QueryUserDataType, QueryArticleDataType };
