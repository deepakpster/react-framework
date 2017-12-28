/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const newLocal = require('cssnano');

module.exports = {
	plugins: [
		newLocal({
			preset: 'default',
		}),
	],
};
