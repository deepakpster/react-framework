// @flow
import React from 'react';
import styles from './styles.scss';

type Props = {
	title: string,
	onGreetingSelect: Function
};

const Dashboard = (props: Props) => (
	<div>
		<h1 onClick={() => props.onGreetingSelect(props.title)} >{props.title}</h1>
		<hr />
		<p>Hey World.</p>
	</div >
);

export default Dashboard;
