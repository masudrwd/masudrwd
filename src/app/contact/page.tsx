import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import ContactAbout from './components/ContactAbout';
import FormContact from './components/FormContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Contact Masud Rana | Web Developer & Designer',
   category: 'Blog & Web Development',
   description:
      "Get in touch with Masud Rana for your web development and design needs. Contact me through Masudrwd and let's build something great together.",
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
      title: 'Contact Masud Rana | Web Developer & Designer',
      description:
         "Get in touch with Masud Rana for your web development and design needs. Contact me through Masudrwd and let's build something great together.",
   },
   openGraph: {
      type: 'website',
      url: 'https://masudrwd.netlify.app',
      title: 'Contact Masud Rana | Web Developer & Designer',
      description:
         "Get in touch with Masud Rana for your web development and design needs. Contact me through Masudrwd and let's build something great together.",
      siteName: 'MasudRwd',
      images: [
         {
            url: '/opengraph.jpg',
         },
      ],
   },
};

const ContactPage = () => {
   return (
      <Container maxW={'breakpoint-xl'} pt={'107px'}>
         <Box
            bg={'secondary.900'}
            _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
            px={{ base: 5, md: 12 }}
            py={12}
            borderRadius={30}
         >
            <Heading size={'3xl'} mb={10} textAlign={'center'}>
               Get in Touch!
            </Heading>
            <Grid templateColumns="repeat(12, 1fr)" gap="6" mt={12}>
               <ContactAbout />
               <FormContact />
            </Grid>
         </Box>
      </Container>
   );
};

export default ContactPage;
