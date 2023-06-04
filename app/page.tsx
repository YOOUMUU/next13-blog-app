import MyProfilePic from '@/components/MyProfilePic';
import Post from '@/components/Post';

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <MyProfilePic />
      <p className="mt-8 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 🤗&nbsp;
        <span className="whitespace-nowarp">
          I'm <span className="font-bold">Ervin</span>.
        </span>
      </p>
      <Post />
    </main>
  );
}
