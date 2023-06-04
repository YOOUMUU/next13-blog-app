import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Params {
  params: {
    postId: string;
  };
}

export const generateMetadata = ({ params }: Params) => {
  const posts = getSortedPostsData();

  const { postId } = params;

  const post = posts.find(({ id }) => id === postId);

  if (!post)
    return {
      title: 'Post not found',
      description: 'The requested post does not exist.',
    };

  return {
    title: post.title,
    description: post.title,
  };
};

const Post = async ({ params }: Params) => {
  const posts = getSortedPostsData();

  const { postId } = params;

  const post = posts.find(({ id }) => id === postId);

  if (!post) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  return (
    <div className="container dark:text-white mx-auto">
      <h1 className="text-3xl font-bold mt-4 mb-0">{title}</h1>
      <p className="text-md mt-1">{date}</p>
      <article className="mt-4 ">
        <section
          className="no-style"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p className="mt-4 text-xl font-semibold text-sky-500">
          <Link href="/">← Baxk to home</Link>
        </p>
      </article>
    </div>
  );
};

export default Post;
