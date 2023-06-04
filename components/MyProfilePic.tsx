import Image from 'next/image';

const MyProfilePic = () => {
  return (
    <section className="container w-full mx-auto">
      <Image
        className="mx-auto mt-8"
        src="/images/logo.svg"
        width={200}
        height={100}
        alt="YOOUMUU"
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
