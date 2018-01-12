// @flow
import React from 'react';

type Props = {
  users: Array<Object>,
  onUserSelect: Function
};

const UserList = (props: Props) => (
	<ul>
		{
			props.users.map((user, index) => (
				<li key={`user-${index}`} onClick={() => { props.onUserSelect(user); }}>
					{user.email}
				</li>
			))
		}
	</ul >
);

export default UserList;
