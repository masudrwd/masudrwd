import Provider from '@/app/Components/ui/ChakraProvider/ChakraProvider';
import type { Metadata } from 'next';
import Navbar from './layouts/header/components/Navbar';
import { Inter } from 'next/font/google';
import Footer from './layouts/footer/Footer';

const inter = Inter({
   subsets: ['latin'],
   display: 'swap',
});

export const metadata: Metadata = {
   title: 'Md Masud Rana | React front-end Developer & Designer',
   category: 'Blog & Web Development',
   description:
      "Discover Masud Rana's portfolio of web development and design projects. Explore my skills, expertise, and services to bring your ideas to life at MasudRWD.",
   creator: 'Masud',
   robots: 'index, follow',
   keywords: [
      'react',
      'nextjs',
      'masud rana',
      'web development',
      'design',
      'personal blog',
      'personal website',
      'article',
      'front-end developer',
      'freelancer',
      'masudrwd',
      'masud rana',
      'masud rana ',
   ],
   twitter: {
      images: '/opengraph.jpg',
      card: 'summary_large_image',
      site: '@masudrwd',
      title: 'Md Masud Rana | React front-end Developer & Designer',
      description:
         "Discover Masud Rana's portfolio of web development and design projects. Explore my skills, expertise, and services to bring your ideas to life at MasudRWD.",
   },
   openGraph: {
      type: 'website',
      url: 'https://masudrwd.netlify.app',
      title: 'Md Masud Rana | React front-end Developer & Designer',
      description:
         "Discover Masud Rana's portfolio of web development and design projects. Explore my skills, expertise, and services to bring your ideas to life at MasudRWD.",
      siteName: 'MasudRwd',
      images: [
         {
            url: '/opengraph.jpg',
         },
      ],
   },
   verification: {
      google: 'VMjejhYS0J9-W0EPGYWHjz04c5yA7SciUetIa4swXAc',
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" suppressHydrationWarning className={inter.className}>
         <body>
            <Provider>
               <Navbar />
               {children}
               <Footer />
            </Provider>
         </body>
      </html>
   );
}
