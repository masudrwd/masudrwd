'use client';

import {
   ChakraProvider,
   createSystem,
   defaultConfig,
   defineConfig,
} from '@chakra-ui/react';

import { ThemeProvider } from 'next-themes';

const config = defineConfig({
   theme: {
      tokens: {
         colors: {
            primary: {
               50: { value: '#f0fdfa' },
               100: { value: '#ccfbf1' },
               200: { value: '#99f6e4' },
               300: { value: '#5eead4' },
               400: { value: '#2dd4bf' },
               500: { value: '#14b8a6' },
               600: { value: '#0d9488' },
               700: { value: '#0c5d56' },
               800: { value: '#114240' },
               900: { value: '#032726' },
               950: { value: '#021716' },
            },
            secondary: {
               100: { value: '#fff' },
               900: { value: '#1C1C1C' },
            },
         },
      },
      semanticTokens: {
         colors: {
            bg: {
               DEFAULT: {
                  value: {
                     _light: '#f7f7f7',
                     _dark: '{colors.black}',
                  },
               },
            },
         },
      },
   },
});

const system = createSystem(defaultConfig, config);

const Provider = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme={'dark'}
         >
            <ChakraProvider value={system}>{children}</ChakraProvider>
         </ThemeProvider>
      </>
   );
};

export default Provider;
