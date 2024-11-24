import { Container, Grid, GridItem } from '@chakra-ui/react';
import AboutSection from '../Components/shared/AboutSection';
import ProfileSection from '../Components/shared/ProfileSection';
import ContactOfferSection from '../Components/shared/ContactOfferSection';
import Skills from './components/Skills';
import Education from './components/Education';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'About - Masud Rana | Web Developer & Designer',
   category: 'Blog & Web Development',
   description:
      'Learn more about Masud Rana, a passionate web developer and designer specializing in creating modern, user-friendly websites. Explore my journey on Masudrwd.',
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
      title: 'About - Masud Rana | Web Developer & Designer',
      description:
         'Learn more about Masud Rana, a passionate web developer and designer specializing in creating modern, user-friendly websites. Explore my journey on Masudrwd.',
   },
   openGraph: {
      type: 'website',
      url: 'https://masudrwd.netlify.app',
      title: 'About - Masud Rana | Web Developer & Designer',
      description:
         'Learn more about Masud Rana, a passionate web developer and designer specializing in creating modern, user-friendly websites. Explore my journey on Masudrwd.',
      siteName: 'MasudRwd',
      images: [
         {
            url: 'https://masudrwd.netlify.app/opengraph.jpg',
         },
      ],
   },
};

const AboutPage = () => {
   return (
      <>
         <Container maxW={'breakpoint-xl'} pt={'107px'}>
            <Grid templateColumns="repeat(12, 1fr)" gap="6">
               <GridItem
                  bg={'secondary.900'}
                  _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
                  p={12}
                  borderRadius={30}
                  colSpan={{ base: 12, lg: 5 }}
               >
                  <ProfileSection />
               </GridItem>
               <GridItem
                  bg={'secondary.900'}
                  _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
                  p={10}
                  borderRadius={30}
                  colSpan={{ base: 12, lg: 7 }}
               >
                  <AboutSection
                     buttonValue="Get in Touch"
                     buttonLink="/contact"
                  />
               </GridItem>
            </Grid>

            {/* Skills */}

            <Grid templateColumns="repeat(12, 1fr)" gap="6" mt={10}>
               <GridItem
                  bg={'secondary.900'}
                  _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
                  p={12}
                  borderRadius={30}
                  colSpan={{ base: 12, lg: 6 }}
               >
                  <Education />
               </GridItem>
               <GridItem
                  bg={'secondary.900'}
                  _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
                  p={10}
                  borderRadius={30}
                  colSpan={{ base: 12, lg: 6 }}
               >
                  <Skills />
               </GridItem>
            </Grid>

            <ContactOfferSection />
         </Container>
      </>
   );
};

export default AboutPage;
