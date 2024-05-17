export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readingTime: string;
  coverImage: string;
}

export const loadPosts = async (): Promise<BlogPost[]> => {
  const response: Response = await fetch("/posts.json");
  const posts = await response.json();
  return posts;
};
