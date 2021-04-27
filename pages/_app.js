import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { Provider } from 'next-auth/client'

const MyApp = ({ Component, pageProps }) => <Provider session={pageProps.session}><Component {...pageProps} /></Provider>;

export default appWithTranslation(MyApp);
