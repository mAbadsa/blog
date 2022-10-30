export interface TagType {
  id: number;
  tag: string;
}

export interface ReadingListType {
  id: number;
  readingListId: number;
  title: string;
  slug: string;
  author: string;
  avatarImage: string;
  createdAt: string;
  lastReading: string;
  isArchived: boolean;
  tags: Array<TagType>;
}
