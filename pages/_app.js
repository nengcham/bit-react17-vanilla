import '@/styles/globals.css'
import { wrapper } from '@/modules/store'
import { Footer, Header, Nav } from '@/components'

const App = ({ Component, pageProps }) => {
  return <>
  <Header/>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default wrapper.withRedux(App)
