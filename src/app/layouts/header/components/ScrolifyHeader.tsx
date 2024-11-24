'use client';

import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ScrolifyHeader = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 10) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <Box
         as="header"
         bg={'black'}
         py={scrolled ? 2 : 5}
         shadow={scrolled ? 'md' : 'none'}
         _light={{ bg: 'white' }}
         position={'fixed'}
         top={0}
         left={0}
         w={'full'}
         zIndex={'skipNav'}
         transition={'0.5s ease'}
      >
         {children}
      </Box>
   );
};

export default ScrolifyHeader;
