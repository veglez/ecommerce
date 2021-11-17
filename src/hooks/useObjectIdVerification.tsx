import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { $CombinedState } from 'redux';
import { getOneProduct } from 'src/redux/actions/products';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from 'src/redux/config/store';

interface config0 {
  cb: Function;
  stateSelector: keyof Omit<RootState, 'auth' | typeof $CombinedState>;
  redirect: boolean;
  extra?: { [key: string]: any };
  idName: string;
  useCurrentId: false;
}
interface config1 {
  cb: Function;
  stateSelector: keyof Omit<RootState, 'auth' | typeof $CombinedState>;
  redirect: boolean;
  extra?: { [key: string]: any };
  idName?: undefined;
  useCurrentId: true;
}
type config = config0 | config1;

/**
 * @typedef {Object} Result
 * @property {boolean} loading - The global loading state of the current item
 * @property {string | null} error
 * @property {Object} data
 */

/**
 * Check if the id of the URL exists in the current state passed in params and if not, try to fetch the needed data, if it fails redirects to the homepage.
 * @param {Object} params Contain params to configure callback for the dispatcher and the state to point
 * @param {string} params.stateSelector The selector of the state needed
 * @param {boolean} params.useCurrentId A boolean to determine if the id of the current route need to be passed directly to the action callback
 * @param {Function} params.cb A dispatch function (usually used be redux thunk)
 * @param {Object} params.extra A configuration object for the callback in case it works with an object
 * @return {Result} An object with error, loading and item
 */
const useObjectIdVerification = (params: config) => {
  const router = useRouter();
  const { id } = router.query;
  const { cb, idName, extra, useCurrentId, stateSelector, redirect } = params;
  const [times, setTimes] = useState(0);

  const state = useAppSelector((s) => s[stateSelector]);
  const dispatch = useAppDispatch();
  //  @ts-ignore: the state has a property that is always an array with the same name of the state
  const item = state[stateSelector].filter((item: any) => {
    if (useCurrentId) return item.id === id;
    return item[idName as string] === id;
  })[0];
  useEffect(() => {
    console.log('THE TIMES ', times);
    console.log(id, item, state, params.extra);
    //router.query take long to load value. First need to be sure exists
    //item could not exist so first try to call a dispatch to load data in the redux store
    //but only if the state does not have errors (dispatch already have been executed)
    if (id && !item && !state.error && times === 0) {
      if (!!idName) {
        let params: any = {};
        params[idName] = id;
        if (!!extra) {
          params = { ...params, ...extra };
        }
        console.log('PARAMS', params);
        dispatch(cb(params));
        setTimes((pv) => pv + 1);
      }
      if (useCurrentId) {
        dispatch(cb(id));
        setTimes((pv) => pv + 1);
      }
      // dispatch(getOneProduct(id));
    }
  }, [dispatch, id, state.error, item, cb, useCurrentId, idName, extra, times]);

  useEffect(() => {
    if (state.error && redirect) {
      //this time out should be smaller than actions/products dispatch PRODUCT_CLEAN_ERROR
      setTimeout(() => router.push('/'), 2000);
    }
  }, [state.error, router, redirect]);

  const loading = state.loading;
  const error = state.error;
  const data = item;

  return { loading, error, data };
};

export default useObjectIdVerification;
