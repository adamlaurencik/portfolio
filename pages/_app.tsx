import "../styles/globals.css";

type MyAppProps<P extends {}> = {
  Component: React.ComponentType<P>;
  pageProps: P;
};

function MyApp<P extends {}>({ Component, pageProps }: MyAppProps<P>) {
  return <Component {...pageProps} />;
}

export default MyApp;
