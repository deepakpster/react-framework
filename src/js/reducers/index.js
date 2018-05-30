import { combineReducers } from 'redux';
import DashboardReducer from './reducer-dashboard';
import selectedGreeting from './reducer-selected-greeting';

const allReducers = combineReducers({
	dashboard: DashboardReducer,
	selectedGreeting,
});

export default allReducers;
