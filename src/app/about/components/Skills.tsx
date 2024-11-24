'use client';

import {
   ProgressBar,
   ProgressLabel,
   ProgressRoot,
   ProgressValueText,
} from '@/components/ui/progress';
import { skillsData } from '@/db/About/Skills';
import { Flex, Heading, HStack } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Skills = () => {
   const { ref: skillRef, inView: isSkillObserved } = useInView({
      threshold: 0,
      triggerOnce: true,
      delay: 1000,
   });

   return (
      <>
         <Heading size={'2xl'} mb={10}>
            Skills:
         </Heading>
         <Flex flexDirection={'column'} gap={5} ref={skillRef}>
            {skillsData?.map((skill) => (
               <ProgressRoot
                  value={isSkillObserved ? skill.level : 0}
                  maxW="full"
                  key={skill.id}
               >
                  <HStack
                     alignItems={'center'}
                     justifyContent={'space-between'}
                     mb={2}
                  >
                     <ProgressLabel>{skill.name}</ProgressLabel>
                     <ProgressValueText>
                        {isSkillObserved ? (
                           <CountUp
                              start={0}
                              end={skill.level}
                              suffix="%"
                              duration={0.5}
                           />
                        ) : (
                           `${0}%`
                        )}
                     </ProgressValueText>
                  </HStack>
                  <ProgressBar flex="1" />
               </ProgressRoot>
            ))}
         </Flex>
      </>
   );
};

export default Skills;
