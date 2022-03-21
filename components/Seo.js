import Head from "next/head";
import { site } from "./config";

function SEO({ title }) {
  const description = "Nature at the service of feminine beauty.";
  const keywords = "beauty";
  const siteURL = site.adresse;
  const twitterHandle = "twitter";
  const imagePreview = `${siteURL}`;

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=ISO-8859-1' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' key='twcard' />
      <meta name='twitter:creator' content={twitterHandle} key='twhandle' />
      <meta property='og:locale' content='en_US' />
      {/* Open Graph */}
      <meta property='og:url' content={siteURL} key='ogurl' />
      <meta property='og:image' content={imagePreview} key='ogimage' />
      <meta property='og:site_name' content={siteURL} key='ogsitename' />
      <meta property='og:title' content={title} key='ogtitle' />
      <meta property='og:description' content={description} key='ogdesc' />
      <meta
        name='facebook-domain-verification'
        content='q22plqy48l4bu7a5lnf6uk3n86qvwt'
      />
      
      <title>{title}</title>
    </Head>
  );
}

export default SEO;
