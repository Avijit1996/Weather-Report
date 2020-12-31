const initialState = {
  country: {},
  weather: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY':
      return {...state, country: action.data.data[0]};
    case 'SET_WEATHER':
      return {...state, weather: action.data};
    default:
      return state;
  }
};
