import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogPost, loadPosts } from "@utils/loadPosts";

const Blog: React.FC = (): ReactElement => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      const posts: BlogPost[] = await loadPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="block p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-gray-600">{post.excerpt}...</p>
              <p className="mt-2 text-gray-500">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
