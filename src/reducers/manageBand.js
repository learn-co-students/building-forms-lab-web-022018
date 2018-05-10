export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return Object.assign({}, state, { bands: [...state.bands, action.band] });
    default:
      return state;
  }
};
