import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import Layout from '../comps/Layout/Layout'
import { PAGES_MANIFEST } from 'next/dist/shared/lib/constants'

const MyApp = ({ Component, pageProps }) => {

  const getLayout = Component.getLayout ||
   ((page) => (<Layout>{page}</Layout>))

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
