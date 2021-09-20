import { action } from 'reducers';

interface favoritesState {
  data: productCardProps[];
}

const initalState: favoritesState = {
  data: [],
};

export const favoritesTypes = {
  DELETE: 'DELETE',
  ADD: 'ADD',
  GET_ALL: 'get_all',
};

const favoritesReducer = (state = initalState, action: action) => {
  switch (action.type) {
    case favoritesTypes.GET_ALL:
      return {
        ...state,
        data: [...action.payload],
      };
    case favoritesTypes.ADD:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case favoritesTypes.DELETE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favoritesReducer;
