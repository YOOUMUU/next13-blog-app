import Navbar from '@/components/Navbar';
import 'styles/globals.css';

export const metadata = {
  title: "Yooumuu's Blogs",
  description: 'Create by yooumuu',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
