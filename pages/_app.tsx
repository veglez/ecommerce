import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxThunk from 'redux-thunk';
import Test from 'components/Test';

const store = createStore(
  reducers, //all reducers
  {}, //initialState
  applyMiddleware(reduxThunk)
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='superContainer'>
      <Provider store={store}>
        <Test />
        <Component className='mainWrapper' {...pageProps} />
      </Provider>
    </div>
  );
}
export default MyApp;
