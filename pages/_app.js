import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import SEO from '../nextseo.config';

// Import Bootstrap's minified CSS and AOS.
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Custom CSS for modifying things outside of Bootstrap.
import '../styles/style.css';


function App({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init();
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default App;