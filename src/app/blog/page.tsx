import { Box, Container, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: "Masud Rana's Blog",
   category: 'Blog & Web Development',
   description:
      'Stay updated with the latest web development trends, tutorials, and insights by Masud Rana. Read my blog on Masudrwd.',
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
      title: "Masud Rana's Blog",
      description:
         'Stay updated with the latest web development trends, tutorials, and insights by Masud Rana. Read my blog on Masudrwd.',
   },
   openGraph: {
      type: 'website',
      url: 'https://masudrwd.netlify.app',
      title: "Masud Rana's Blog",
      description:
         'Stay updated with the latest web development trends, tutorials, and insights by Masud Rana. Read my blog on Masudrwd.',
      siteName: 'MasudRwd',
      images: [
         {
            url: '/opengraph.jpg',
         },
      ],
   },
};

const BlogPage = () => {
   return (
      <Container maxW={'breakpoint-xl'} pt={'107px'}>
         <Box
            bg={'secondary.900'}
            _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
            p={12}
            borderRadius={30}
         >
            <Text fontSize={20} textAlign={'center'}>
               Currently I'm working for blog page. It'll take some time to
               implement. Thanks for visiting me 🤝
            </Text>
         </Box>
      </Container>
   );
};

export default BlogPage;
