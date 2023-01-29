export interface dbData {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image: string;
  tags: string;
  last_reading: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  username: string;
  name: string;
  email: string;
  bio: string;
  profile_image: string;
  location: string;
  github_account: string;
  website_url: string;
  user_created_at: string;
  likecount: number | null;
  commentcount: number | null;
}
