import Document, { Html, Head, Main, NextScript } from "next/document";
import {useEffect} from "react";
import ReactGA from 'react-ga'

declare global {
  interface Window { GA_INITIALIZED?: boolean; }
}

export default class CustomDocument extends Document {

  componentDidMount(){
    if(!(window.GA_INITIALIZED as boolean) && process.env.NODE_ENV === "production"){
      ReactGA.initialize('G-HBYSJNW3PZ')
      window.GA_INITIALIZED = true;
    }
  }

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
