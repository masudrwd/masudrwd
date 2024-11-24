import { servicesData } from '@/db/Service/Service';
import { Box, GridItem, Heading, Text, VStack } from '@chakra-ui/react';

const ServiceList = () => {
   return (
      <>
         {servicesData?.map((service) => (
            <GridItem
               colSpan={{ base: 12, md: 6, lg: 4 }}
               border={'1px solid #383838'}
               _light={{ border: '1px solid #e2e2e2' }}
               p={6}
               py={8}
               borderRadius={8}
               textAlign={'center'}
               cursor={'pointer'}
               key={service.id}
            >
               <VStack>
                  <Box
                     fontSize={30}
                     background={'gray.800'}
                     _light={{ background: 'gray.200', color: 'black' }}
                     color={'white'}
                     padding={5}
                     borderRadius={'full'}
                     mb={2}
                  >
                     {service.icon}
                  </Box>

                  <Heading size={'lg'} mb={2}>
                     {service.title}
                  </Heading>
                  <Text
                     fontSize={'md'}
                     color={'gray.300'}
                     _light={{ color: 'gray.700' }}
                  >
                     {service.description}
                  </Text>
               </VStack>
            </GridItem>
         ))}
      </>
   );
};

export default ServiceList;
