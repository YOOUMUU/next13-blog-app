import { getPostMeta, getPostByName } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import 'highlight.js/styles/github-dark.css';

export const revalidate = 86400;

interface Params {
  params: {
    postId: string;
  };
}

export const generateStaticParams = async () => {
  const posts = await getPostMeta();

  if (!posts) return [];

  return posts.map(({ id }) => ({
    postId: id,
  }));
};

export const generateMetadata = async ({ params: { postId } }: Params) => {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post)
    return {
      title: 'Post not found',
      description: 'The requested post does not exist.',
    };

  return {
    title: post.meta.title,
    content: post.content,
  };
};

const Post = async ({ params: { postId } }: Params) => {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <div className="prose container dark:text-white mx-auto">
      <h1 className="text-3xl font-bold mt-4 mb-0">{meta.title}</h1>
      <p className="text-md mt-1">{meta.date}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mt-4 text-xl font-semibold text-sky-500">
        <Link href="/">← Back to home</Link>
      </p>
    </div>
  );
};

export default Post;
