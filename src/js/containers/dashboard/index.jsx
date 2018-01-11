import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DashboardComponent from '../../components/dashboard';

class Dashboard extends Component {
	getGreetingInfo() {
		return this.props.dashboard.greeting;
	}
	render() {
		return (
			<DashboardComponent title={this.getGreetingInfo()} />
		);
	}
}

function mapStateToProps(state) {
	return {
		dashboard: state.dashboard,
	};
}

export default connect(mapStateToProps)(Dashboard);
