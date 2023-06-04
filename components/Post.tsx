import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

const Post = () => {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <h2 className="text-3xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map(({ id, date, title }) => (
          <li key={id} className="mt-4">
            <Link
              href={`/posts/${id}`}
              className="text-2xl font-semibold hover:underline dark:text-white/90"
            >
              {title}
            </Link>
            <p className="text-gray-500 text-sm mt-1">{date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Post;
