import { combineReducers } from 'redux';
import DashboardReducer from './reducer-dashboard';
import UsersReducer from './reducer-users';
import selectedGreeting from './reducer-selected-greeting';
import ActiveUser from './reducer-selected-user';


const allReducers = combineReducers({
	dashboard: DashboardReducer,
	users: UsersReducer,
	activeUser: ActiveUser,
	selectedGreeting,
});


export default allReducers;
