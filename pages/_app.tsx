// Import Bootstrap's minified CSS and AOS.
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Custom CSS for modifying things outside of Bootstrap.
import '../styles/style.css';

import { DefaultSeo } from 'next-seo';
import SEO from '../nextseo.config';
import { useEffect } from 'react';

function App({ Component, pageProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </>
    );
}

export default App;
