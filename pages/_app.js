import "../styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Head from "next/head";
import Script from 'next/script'
import { site } from "../components/config";

function MyApp({ Component, pageProps }) {
  
  const ga = 'https://www.googletagmanager.com/gtag/js?id='


  useEffect(async () => {
    const { default: ReactPixel } = await import("react-facebook-pixel");
    ReactPixel.init(site.fb_pixel, null, {
      autoConfig: true,
      debug: true,
    });
    ReactPixel.pageView();
    ReactPixel.track("ViewContent");
  });

  return (
    <>
      
      <Layout>
        <Head>
        <link rel='icon' type='image/png' href='/favicon.png' />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-PX8ZB89E9G`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-PX8ZB89E9G', {
                        page_path: window.location.pathname,
                        });
                    `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
