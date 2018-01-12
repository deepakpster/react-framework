// @flow
import React from 'react';

type Props = {
  selected: Object,
};

const UserDetails = (props: Props) => (
	<div>
		<span>Photo: {props.selected.picture}</span>
		<span>Age: {props.selected.age}</span>
		<span>Email: {props.selected.email}</span>
	</div>
);

export default UserDetails;
