import UserData from "./UserData";
import tagsType from "./Tags";

export default interface Articles {
  id: number;
  title: string;
  slug: string;
  content: string;
  reactions: number;
  comments: number;
  tags: tagsType[];
  coverImage: string;
  lastReading: number;
  createdAt: string;
  updatedAt: string;
  userData: UserData;
}
