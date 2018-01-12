// @flow
import React from 'react';
import UserContainer from './../../containers/user';

type Props = {
	title: string,
	onGreetingSelect: Function
};

const Dashboard = (props: Props) => (
	<div>
		<h1 onClick={() => props.onGreetingSelect(props.title)} >{props.title}</h1>
		<hr />
		<p>Hey World.</p>
		<UserContainer />
	</div >
);

export default Dashboard;
