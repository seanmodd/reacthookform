import { ChakraProvider, VStack } from '@chakra-ui/react';
import '../styles/globals.css';
import ScrollToTop from '@/components/ScrollToTop';
import { theme } from '../styles/styles';
import DarkModeSwitch from '@/components/DarkModeSwitch';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DarkModeSwitch />
      <ScrollToTop />
      <VStack>
        <Component {...pageProps} />
      </VStack>
    </ChakraProvider>
  );
}
export default MyApp;
