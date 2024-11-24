import { Box, Container, Heading, HStack, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import MenuList from './MenuList';
import MobileMenu from './MobileMenu';
import ThemeSwitch from '@/app/Components/ui/ThemeSwitchMode/ThemeSwitch';
import HireMeButton from './HireMe';
import ScrolifyHeader from './ScrolifyHeader';
import { MyLogo } from './MyLogo';

const Navbar = () => {
   return (
      <ScrolifyHeader>
         <Container maxW={'breakpoint-xl'} position={'unset'}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
               <Box>
                  <Heading fontSize={{ base: 25 }}>
                     <Link
                        as={NextLink}
                        href="/"
                        transition={'ease 0.5s'}
                        _hover={{ textDecoration: 'none' }}
                        _focus={{ outline: 0, textDecoration: 'none' }}
                     >
                        <Box>
                           <MyLogo />
                        </Box>
                     </Link>
                  </Heading>
               </Box>
               <Box as={HStack} gap={2}>
                  <MenuList />
                  <ThemeSwitch />
                  <HireMeButton />
                  <MobileMenu />
               </Box>
            </HStack>
         </Container>
      </ScrolifyHeader>
   );
};

export default Navbar;
