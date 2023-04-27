import Layout from "./_layout";
import "../styles/globals.css";
import "@fontsource/spartan";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
