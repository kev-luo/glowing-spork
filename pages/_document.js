import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript initialColorMode="light" useSystemColorMode={true} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
