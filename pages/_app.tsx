import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'src/redux/config/store';
import Test from 'components/Test';
import Header from 'components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='superContainer'>
      <Provider store={store}>
        <Header />
        <Test />
        <Component className='mainWrapper' {...pageProps} />
      </Provider>
    </div>
  );
}
export default MyApp;
