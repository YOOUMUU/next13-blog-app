import Post from '@/components/Post';
import MyProfilePic from '@/components/MyProfilePic';

export const revalidate = 10;

export default function Home() {
  return (
    <div className="px-6 mx-auto">
      <MyProfilePic />
      <p className="mt-8 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 🤗&nbsp;
        <span className="whitespace-nowarp">
          I'm <span className="font-bold">Ervin</span>.
        </span>
      </p>
      <Post />
    </div>
  );
}
