import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {

  render() {
    return (
      <Html lang="en">
        <Head />
        <title>Adam's Laurencik Portfolio</title>
        <meta
          name="description"
          content="Portfolio webpage of Adam Laurencik, skilled FrontEnd developer. Learn about his work!"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
