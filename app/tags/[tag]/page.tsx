import { getPostMeta } from '@/lib/posts';
import Link from 'next/link';

export const revalidate = 86400;

interface Props {
  params: {
    tag: string;
  };
}

export const generateStaticParams = async () => {
  const posts = await getPostMeta();

  if (!posts) return [];

  const tags = posts.map((post) => post.tags).flat();

  return Array.from(tags).map((tag) => ({ tag }));
};

export const generateMetadata = async ({ params: { tag } }: Props) => {
  return {
    title: `Posts tagged with ${tag}`,
    description: `Posts tagged with ${tag}`,
  };
};

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostMeta();

  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length)
    return (
      <div className="text-center">
        <p className="mt-10 text-center">Sorry, no posts for that keyword.</p>
        <Link href="/tags">Back to Home</Link>
      </div>
    );

  return (
    <>
      <h2 className="text-3xl mt-4 mb-0">Results for: #{tag}</h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul>
          {tagPosts.map((post) => (
            <li key={post.id} className="mt-4">
              <Link
                href={`/posts/${post.id}`}
                className="text-2xl font-semibold hover:underline dark:text-white/90"
              >
                {post.title}
              </Link>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
