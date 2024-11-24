import { Container, Grid, GridItem } from '@chakra-ui/react';

import ContactOffer from './Components/shared/ContactOfferSection';
import ProfileSection from './Components/shared/ProfileSection';
import AboutSection from './Components/shared/AboutSection';

export default function Home() {
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
                     buttonValue={'Download CV'}
                     buttonLink={'/contact'}
                  />
               </GridItem>
            </Grid>
            <ContactOffer />
         </Container>
      </>
   );
}
