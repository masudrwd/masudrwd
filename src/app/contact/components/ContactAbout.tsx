import { personalInformationData } from '@/db/Contact/personalInformation';
import { Box, Flex, GridItem, Heading, Text, VStack } from '@chakra-ui/react';

const ContactAbout = () => {
   return (
      <GridItem
         colSpan={{ base: 12, md: 5 }}
         border={'1px solid #383838'}
         _light={{ border: '1px solid #e2e2e2' }}
         p={6}
         py={8}
         borderRadius={'4xl'}
         cursor={'pointer'}
      >
         <Flex
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            flexDirection={'column'}
            gap={10}
         >
            {personalInformationData?.map((myInformation) => (
               <Box key={myInformation.id}>
                  <Heading size={'lg'} mb={1}>
                     {myInformation.title}
                  </Heading>
                  <Text
                     fontSize={'md'}
                     color={'gray.300'}
                     _light={{ color: 'gray.700' }}
                  >
                     {myInformation.value}
                  </Text>
               </Box>
            ))}
         </Flex>
      </GridItem>
   );
};

export default ContactAbout;
