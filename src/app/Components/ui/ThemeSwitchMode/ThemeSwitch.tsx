'use client';

import { IconButton } from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeSwitch = () => {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return (
         <IconButton bg={'none'} color={'white'} _light={{ color: 'black' }}>
            <FiSun />
         </IconButton>
      );
   }

   const toggleColorMode = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
   };
   return (
      <IconButton
         aria-label="toggle color mode"
         bg={'none'}
         color={'white'}
         _light={{ color: 'black' }}
         onClick={toggleColorMode}
      >
         {theme === 'light' ? <FiMoon /> : <FiSun />}
      </IconButton>
   );
};

export default ThemeSwitch;
