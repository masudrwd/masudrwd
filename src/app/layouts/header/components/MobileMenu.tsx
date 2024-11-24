'use client';

import { NavData } from '@/db/navData';
import {
   DrawerBackdrop,
   DrawerRoot,
   DrawerHeader,
   DrawerContent,
   DrawerBody,
   DrawerFooter,
   DrawerCloseTrigger,
   Box,
   ListRoot,
   VStack,
   ListItem,
   Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import NextLink from 'next/link';
import { IoClose } from 'react-icons/io5';

import { usePathname } from 'next/navigation';

const MobileMenu = () => {
   const pathname = usePathname();
   const [open, setOpen] = useState(false);

   return (
      <>
         <Box
            color="white"
            ml={3}
            _light={{ color: 'black' }}
            display={{ base: 'block', lg: 'none' }}
            cursor={'pointer'}
            fontSize={25}
            onClick={() => setOpen(!open)}
         >
            <GiHamburgerMenu />
         </Box>

         <Box
            position={'absolute'}
            top={0}
            right={0}
            overflow={'hidden'}
            w={'xs'}
         >
            <DrawerRoot
               open={open}
               onOpenChange={(e) => setOpen(e.open)}
               placement={'end'}
               size={'xs'}
            >
               <DrawerBackdrop />
               <DrawerContent height={'100vh'}>
                  <DrawerHeader position={'relative'}>
                     <Box
                        fontSize={30}
                        cursor={'pointer'}
                        onClick={() => setOpen(!open)}
                        position={'absolute'}
                        top={2}
                        right={3}
                        _hover={{ opacity: 0.7 }}
                     >
                        <IoClose />
                     </Box>
                  </DrawerHeader>
                  <DrawerBody>
                     <ListRoot
                        as={VStack}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        listStyle={'none'}
                        gap={10}
                        mt={20}
                        fontSize={25}
                     >
                        {NavData.map((item) => (
                           <ListItem key={item.id}>
                              <Link
                                 as={NextLink}
                                 href={item.slug}
                                 color={
                                    pathname === item.slug
                                       ? 'primary.400'
                                       : 'white'
                                 }
                                 _light={{
                                    color:
                                       pathname === item.slug
                                          ? 'primary.500'
                                          : 'black',
                                 }}
                                 transition={'ease 0.5s'}
                                 _hover={{
                                    textDecoration: 'none',
                                    color: 'primary.400',
                                 }}
                                 _focus={{ outline: 0, textDecoration: 'none' }}
                                 onClick={() => setOpen(!open)}
                              >
                                 {item.title}
                              </Link>
                           </ListItem>
                        ))}
                     </ListRoot>
                  </DrawerBody>
                  <DrawerFooter>
                     Follow:{' '}
                     <Link
                        as={NextLink}
                        href="http://fb.com/masudrwd"
                        target="_blank"
                        _focus={{ outline: 0 }}
                     >
                        Facebook
                     </Link>
                  </DrawerFooter>
                  <DrawerCloseTrigger />
               </DrawerContent>
            </DrawerRoot>
         </Box>
      </>
   );
};

export default MobileMenu;
