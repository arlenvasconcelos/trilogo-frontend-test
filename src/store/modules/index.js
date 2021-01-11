import { combineReducers } from 'redux';
import tickets from './tickets/reducer';

const reducers = combineReducers({
  tickets,
});

export default reducers;
