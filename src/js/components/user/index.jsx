// @flow
import React from 'react';
import UserList from './list';
import UserDetails from './details';

type Props = {
  users: Array<Object>,
  selectedUser: Object,
  onUserSelect: Function
};

const Users = (props: Props) => (
	<div>
		<UserList users={props.users} onUserSelect={props.onUserSelect} />
		<UserDetails selected={props.selectedUser} />
	</div >
);

export default Users;
