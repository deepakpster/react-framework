// @flow
// Action Creator function
export const selectGreeting = (greeting) => 
	// Action
	 ({
		type: 'GREETING_SELECTED',
		payload: greeting,
	})
;
