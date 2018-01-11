import { combineReducers } from 'redux';
import DashboardReducer from './reducer-dashboard';


const allReducers = combineReducers({
	dashboard: DashboardReducer,
});


export default allReducers;
