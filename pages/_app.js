import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import config from "../src/aws-exports";
import "../configureAmplify";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
