import { combineReducers } from 'redux';

import { clocksReducer } from 'servicesOld/clocks/data/reducers';

export default combineReducers({
  clocks: clocksReducer,
});
