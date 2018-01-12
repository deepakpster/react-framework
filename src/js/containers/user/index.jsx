import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UsersComponent from '../../components/user';
import { selectedUser } from '../../actions/user';

class Users extends Component {
	getUsersList() {
		return this.props.users;
	}
	render() {
		return (
			<UsersComponent users={this.getUsersList()} onUserSelect={this.props.selectedUser} selectedUser={this.props.activeUser} />
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users,
		activeUser: state.activeUser,
	};
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectedUser,
	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Users);
