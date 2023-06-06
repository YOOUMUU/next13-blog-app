export const runtime = 'edge';

import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import 'styles/globals.css';

export const metadata: Metadata = {
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
        <main>{children}</main>
      </body>
    </html>
  );
}
