import {
   TimelineConnector,
   TimelineContent,
   TimelineDescription,
   TimelineItem,
   TimelineRoot,
   TimelineTitle,
} from '@/components/ui/timeline';
import { educationData } from '@/db/About/Education';
import { Heading, Text } from '@chakra-ui/react';
import { PiStudentBold } from 'react-icons/pi';

const Education = () => {
   return (
      <>
         <Heading size={'2xl'} mb={10}>
            Skills:
         </Heading>
         <TimelineRoot maxW="full" gap={4}>
            {educationData?.map((edu) => (
               <TimelineItem key={edu.id}>
                  <TimelineConnector>
                     <PiStudentBold />
                  </TimelineConnector>
                  <TimelineContent>
                     <TimelineTitle fontSize={18}>{edu.degree}</TimelineTitle>
                     <TimelineDescription fontSize={16}>
                        {edu.year}
                     </TimelineDescription>
                     <Text textStyle="sm">{edu.institution}</Text>
                  </TimelineContent>
               </TimelineItem>
            ))}
         </TimelineRoot>
      </>
   );
};

export default Education;
