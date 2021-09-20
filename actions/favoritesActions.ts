import { favoritesTypes } from 'reducers/favoritesReducer';
import { Dispatch } from 'redux';

export const getFavorites = () => async (dispatch: Dispatch) => {
  if (window !== undefined) {
    try {
      const res = await window.fetch('/api/favorites');
      const data = await res.json();

      dispatch({
        type: favoritesTypes.GET_ALL,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: 'none' });
    }
  }
};

//TODO call delete action to API

export const deleteFavorite = (id: string) => (dispatch: Dispatch) => {
  dispatch({
    type: favoritesTypes.DELETE,
    payload: id,
  });
};
