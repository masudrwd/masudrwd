import { Box, HStack, Link, Strong, Text, VStack } from '@chakra-ui/react';
import Btn from './Btn';
import NextLink from 'next/link';

type ButtonProps = {
   buttonValue: string;
   buttonLink: string;
};

const AboutSection = ({ buttonValue, buttonLink }: ButtonProps) => {
   return (
      <>
         <VStack alignItems={'flex-start'} fontSize={20}>
            <Text color={'gray.400'} _light={{ color: 'gray.600' }}>
               Hello there!
            </Text>
            <Text mt={3} lineHeight={'35px'}>
               My name is Masud, and I am a{' '}
               <Strong>Front-end Web Developer</Strong>, Target to be a
               <Strong>FullStack Web Developer</Strong>. Coding is my passion
               and I love to play with coding, solving problems, building
               amazing projects, debugging and discussing coding practices and
               methods with other programmers.
            </Text>
            <Text mt={2}>
               I believe, <Strong>Knowledge has no limits!</Strong>
            </Text>
            <HStack alignItems={'center'} justifyContent={'center'} mt={6}>
               <Box w={3} h={3} bg={'green.500'} borderRadius={'full'}></Box>
               <Text
                  color={'gray.400'}
                  fontSize={'lg'}
                  _light={{ color: 'gray.600' }}
               >
                  Available for Freelancing
               </Text>
            </HStack>

            <Link
               as={NextLink}
               href={buttonLink}
               color={'white'}
               _dark={{ color: 'black' }}
               _hover={{
                  textDecoration: 'none',
               }}
               _focus={{ outline: 0, textDecoration: 'none' }}
            >
               <Btn
                  mt={7}
                  bg={'primary.400'}
                  borderRadius={'xl'}
                  _light={{ bg: 'primary.500' }}
                  _hover={{ bg: 'primary.600' }}
               >
                  {buttonValue}
               </Btn>
            </Link>
         </VStack>
      </>
   );
};

export default AboutSection;
