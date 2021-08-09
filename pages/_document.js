import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-black transition-all">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
