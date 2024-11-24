import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

import ProfileSocialSection from './ProfileSocialSection';
const ProfileSection = () => {
   return (
      <>
         <VStack gap={5}>
            <Image
               src="/profile.jpg"
               alt="image"
               width={200}
               height={200}
               style={{ borderRadius: '50%' }}
               blurDataURL= 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIDAQQG/8QAGhABAQEBAQEBAAAAAAAAAAAAAAECERIDYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDzcNksNAUyeEypANDMhgYym4ygSkqlJQT0npTSdAlKalANDQAaAEPkkUyCmVMwmVMwDSGkEhpAZxlh+MsBKwmlbE9QEtJaW0loE6xtYAbGQ0ANDQLFMpxTILZVzEsLZA8hpGSHkBnC2H4ygnYlpbSegQ0lpbSWgSrG1gNhoWHgBoaCUVwlFcAvhbKOFsgpDwsNADKYtAmktK6S0CWkdK7R0CdY2lA0PCQ8AwABKK4SiuQXwtlDK2aCsPE5TSgZlHS2gXSej6qWqCekdK6qOgTrBWAeHicPAOGACRTKcPkFs1XNQzVJQXlN1GU3oFOstJ6ZdA3VS1W3SeqBdVHVPqpaoFrBazoHh5U5TSgfrek63oA0Y0DynlSlbNAtNN9I+m+wV9MukvbLsFLpPWi3ZLoG6qeqLoloC1nWWs6CkppUpTdBTo6To6C4DKA6PRbSa0Cntl+jn19C3VoOi/Rl+v65+sBe/Qt+iQBS7Z6IAP0dKAN0dL1gH9D0QA72VrKBNI7qukfoCYAAAAAAAAAAAAAAAAAB/9k='
               placeholder="blur"
            ></Image>
            <Box textAlign={'center'}>
               <Heading as={'h2'} fontSize={30}>
                  Md Masud Rana
               </Heading>
               <Text
                  fontWeight="light"
                  color={'gray.300'}
                  fontSize={18}
                  mt={3}
                  _light={{ color: 'gray.600' }}
               >
                  I am a front-end react developer based in Bangladesh
               </Text>
            </Box>
            <ProfileSocialSection />
         </VStack>
      </>
   );
};

export default ProfileSection;
