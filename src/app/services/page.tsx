import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import ServiceList from './components/ServiceList';
import ContactOfferSection from '../Components/shared/ContactOfferSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Web Development & Design Services | Masud Rana',
   category: 'Blog & Web Development',
   description:
      'Discover professional web development and design services by Masud Rana. Specializing in modern, responsive websites tailored to your needs. Learn more at Masudrwd.',
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
      images: 'https://masudrwd.netlify.app/opengraph.jpg',
      card: 'summary_large_image',
      site: '@masudrwd',
      title: 'Web Development & Design Services | Masud Rana',
      description:
         'Discover professional web development and design services by Masud Rana. Specializing in modern, responsive websites tailored to your needs. Learn more at Masudrwd.',
   },
   openGraph: {
      type: 'website',
      url: 'https://masudrwd.netlify.app',
      title: 'Web Development & Design Services | Masud Rana',
      description:
         'Discover professional web development and design services by Masud Rana. Specializing in modern, responsive websites tailored to your needs. Learn more at Masudrwd.',
      siteName: 'MasudRwd',
      images: [
         {
            url: 'https://masudrwd.netlify.app/opengraph.jpg',
         },
      ],
   },
};

const ServicePage = () => {
   return (
      <>
         <Container maxW={'breakpoint-xl'} pt={'107px'}>
            <Box
               bg={'secondary.900'}
               _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
               px={{ base: 5, md: 12 }}
               py={12}
               borderRadius={30}
            >
               <Heading size={'3xl'} mb={10} textAlign={'center'}>
                  Services
               </Heading>
               <Grid templateColumns="repeat(12, 1fr)" gap="6" mt={12}>
                  {/* Services */}
                  <ServiceList />
               </Grid>
            </Box>
            <ContactOfferSection />
         </Container>
      </>
   );
};

export default ServicePage;
