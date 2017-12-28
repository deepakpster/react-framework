// @flow
import React from 'react';

type Props = {
	title: string
};

class Dashboard extends React.Component<Props> {
	static defaultProps: {
		title: 'default dashboard',
	};
	props: Props;
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<hr />
				<p>
					lorem posum item blah blah blah
				</p>
			</div>
		);
	}
}

export default Dashboard;
