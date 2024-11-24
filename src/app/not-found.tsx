import { Box, Heading, Text, Link, Container } from '@chakra-ui/react';
import NextLink from 'next/link';
import Btn from './Components/shared/Btn';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Not found',
};
const NotFound = () => {
   return (
      <Container maxW={'breakpoint-xl'}>
         <Box
            bg={'secondary.900'}
            _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
            p={10}
            borderRadius={30}
            textAlign={'center'}
            mt={40}
         >
            <Heading
               as={'h1'}
               fontSize={'3xl'}
               fontWeight={'medium'}
               lineHeight={1.5}
            >
               404 Page not found
            </Heading>
            <Text color={'gray.500'} _dark={{ color: 'gray.400' }} my={7}>
               Looks like something's broken. It's not you, it's us. How about
               going back to the home page?
            </Text>

            <Link
               as={NextLink}
               href="/"
               color={'white'}
               _dark={{ color: 'black' }}
               _hover={{
                  textDecoration: 'none',
               }}
               _focus={{ outline: 0, textDecoration: 'none' }}
            >
               <Btn
                  bg={'primary.400'}
                  borderRadius={'xl'}
                  _light={{ bg: 'primary.500' }}
                  _hover={{ bg: 'primary.600' }}
               >
                  Go to Home Page
               </Btn>
            </Link>
         </Box>
      </Container>
   );
};

export default NotFound;
