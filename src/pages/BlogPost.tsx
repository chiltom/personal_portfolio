import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { BlogPost as BlogPostType, loadPosts } from "@src/utilities/loadPosts";
import { TabTitle } from "@src/utilities/documentUtilities";

interface Params extends Record<string, string> {
  id: string;
}

const BlogPost: React.FC = (): ReactElement => {
  const { id } = useParams<Params>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  TabTitle(`Tom Childress - Post ${id}`);

  useEffect(() => {
    const fetchPost = async (): Promise<void> => {
      if (id) {
        const posts: BlogPostType[] = await loadPosts();
        const post: BlogPostType | undefined = posts.find(
          (post) => post.id === parseInt(id)
        );
        setPost(post || null);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold text-center">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-20">
      <div className="max-w-3xl mx-auto">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">
          {post.date} • {post.readingTime}
        </p>
        <ReactMarkdown className="prose">{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
