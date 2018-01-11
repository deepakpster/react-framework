// @flow
import React from 'react';

type Props = {
	title: string
};

const Dashboard = (props: Props) => (
	<div>
		<h1>{props.title}</h1>
		<hr />
		<p>Hey World.</p>
	</div>
);

export default Dashboard;
