// @flow
// Action Creator function
export const selectGreeting = (greeting) => {
	console.log('Clicked on the greeting: ', greeting);
	// Action
	return {
		type: 'GREETING_SELECTED',
		payload: greeting,
	};
};
