import { Box, Heading, Text, Link } from '@chakra-ui/react';
import Btn from './Btn';
import NextLink from 'next/link';

const ContactOfferSection = () => {
   return (
      <>
         <Box
            bg={'secondary.900'}
            _light={{ bg: 'secondary.100', border: '1px solid #ebebeb' }}
            p={10}
            borderRadius={30}
            textAlign={'center'}
            mt={7}
         >
            <Heading
               as={'h2'}
               fontSize={'3xl'}
               fontWeight={'medium'}
               lineHeight={1.5}
            >
               Are You Looking for a React-js Front end Developer?
            </Heading>
            <Text color={'gray.500'} _dark={{ color: 'gray.400' }} my={7}>
               With expertise in React and Next.js, I build fast, responsive,
               and engaging web applications. I'm also available for full-time
               or part-time freelance work. Let's make your project stand out.
            </Text>

            <Link
               as={NextLink}
               href="/contact"
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
                  Let's Talk
               </Btn>
            </Link>
         </Box>
      </>
   );
};

export default ContactOfferSection;
