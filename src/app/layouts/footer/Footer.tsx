import { Container, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const Footer = () => {
   return (
      <Container as={'footer'} mt={10} mb={5}>
         <Text textAlign={'center'}>
            © 2023-{String(new Date().getFullYear()).slice(2)}{' '}
            <Link
               as={NextLink}
               href={'http://fb.com/masudrwd'}
               _focus={{ outline: 0 }}
               target="_blank"
            >
               Masud
            </Link>{' '}
            | All rights reserved.
         </Text>
      </Container>
   );
};

export default Footer;
