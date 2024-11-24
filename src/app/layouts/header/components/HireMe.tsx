import { Button, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

const HireMeButton = () => (
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
      <Button
         rounded={'4xl'}
         size={{ base: 'sm', lg: 'md' }}
         px={{ base: 5, sm: 8 }}
         bg={'primary.500'}
         _dark={{ bg: 'primary.400' }}
         _hover={{ bg: 'primary.600' }}
      >
         Hire Me!
      </Button>
   </Link>
);

export default HireMeButton;
