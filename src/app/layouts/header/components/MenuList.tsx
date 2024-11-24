'use client';

import { usePathname } from 'next/navigation';

import { HStack, ListItem, ListRoot, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { NavData } from '@/db/navData';

const MenuList = () => {
   const pathname = usePathname();
   return (
      <ListRoot
         as={HStack}
         justifyContent={'space-between'}
         alignItems={'center'}
         listStyle={'none'}
         gap={9}
         fontSize={25}
         display={{ base: 'none', lg: 'flex' }}
      >
         {NavData.map((item) => (
            <ListItem key={item.id}>
               <Link
                  as={NextLink}
                  href={item.slug}
                  color={pathname === item.slug ? 'primary.400' : 'inherit'}
                  _light={{
                     color: pathname === item.slug ? 'primary.500' : 'inherit',
                  }}
                  transition={'ease 0.5s'}
                  _hover={{ textDecoration: 'none', color: 'primary.400' }}
                  _focus={{ outline: 0, textDecoration: 'none' }}
               >
                  {item.title}
               </Link>
            </ListItem>
         ))}
      </ListRoot>
   );
};

export default MenuList;
