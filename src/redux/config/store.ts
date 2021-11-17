import { createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import reducers from '../reducers';
import reduxThunk, { ThunkDispatch } from 'redux-thunk';

const store = createStore(
  reducers, //all reducers
  {}, //initialState
  applyMiddleware(reduxThunk)
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// type DispatchFunctionType = ThunkDispatch<RootState, undefined, AnyAction>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
