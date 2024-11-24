'use client';

import { Box, Heading, Text, Link, Container, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import Btn from './Components/shared/Btn';
const ErrorPage = ({ reset }: { reset: () => void }) => {
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
               There's an error
            </Heading>
            <Text color={'gray.500'} _dark={{ color: 'gray.400' }} my={7}>
               We encountered an error. Please let our developer know by{' '}
               <Link
                  href="/contact"
                  color={'primary.500'}
                  _dark={{ color: 'primary.400' }}
               >
                  Contact us
               </Link>
               , or try clicking the try again button. it might resolve the
               issue.
            </Text>

            <HStack alignItems={'center'} justifyContent={'center'}>
               <Btn
                  bg={'primary.400'}
                  borderRadius={'xl'}
                  _light={{ bg: 'primary.500' }}
                  _hover={{ bg: 'primary.600' }}
                  onClick={() => reset()}
               >
                  Try again
               </Btn>

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
                     Home Page
                  </Btn>
               </Link>
            </HStack>
         </Box>
      </Container>
   );
};

export default ErrorPage;
