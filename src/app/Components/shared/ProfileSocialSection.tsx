import { HStack, IconButton, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { SocialLinksForProfile } from '@/db/socialLinks';

const ProfileSocialSection = () => {
   return (
      <>
         <HStack wrap="wrap" gap="8" mt={{ base: 3, md: 5 }}>
            {SocialLinksForProfile?.map((item) => (
               <Link
                  as={NextLink}
                  href={item.slug}
                  _hover={{
                     textDecoration: 'none',
                  }}
                  _focus={{ outline: 0, textDecoration: 'none' }}
                  key={item.id}
                  target="_blank"
               >
                  <IconButton
                     aria-label="Search database"
                     variant="outline"
                     size={'lg'}
                     color={'gray.300'}
                     _light={{ color: 'gray.600' }}
                  >
                     {item.icon}
                  </IconButton>
               </Link>
            ))}
         </HStack>
      </>
   );
};

export default ProfileSocialSection;
