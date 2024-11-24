'use client';

import { Spinner, VStack } from '@chakra-ui/react';

const Loading = () => {
   return (
      <VStack mb={10} mt={40}>
         <Spinner size="lg" />
      </VStack>
   );
};

export default Loading;
