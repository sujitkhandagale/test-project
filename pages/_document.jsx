import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.cdnfonts.com/css/gt-america-trial"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://www.cdnfonts.com/theodora-personal-use.font"
      />
      {/*  media query */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
