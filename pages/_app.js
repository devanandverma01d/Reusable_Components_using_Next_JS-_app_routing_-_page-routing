import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LeftAside from '@/components/LeftAside';
import RightAside from '@/components/RightAside';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App({ Component, pageProps }) {
    return(
      <>
        <Header />
      <main>
        <div className="row">
          <LeftAside />
          <Component {...pageProps} />
        <RightAside />
        </div>
      </main> 
      <Footer />
        
      </>
    ) 
  }