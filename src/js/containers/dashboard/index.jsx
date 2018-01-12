import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardComponent from '../../components/dashboard';
import { selectGreeting } from './../../actions/dashboard';

class Dashboard extends Component {
	getGreetingInfo() {
		return this.props.dashboard.greeting;
	}
	render() {
		return (
			<DashboardComponent title={this.getGreetingInfo()} onGreetingSelect={this.props.selectGreeting} />
		);
	}
}

function mapStateToProps(state) {
	return {
		dashboard: state.dashboard,
		users: state.users,
	};
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectGreeting,
	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Dashboard);
