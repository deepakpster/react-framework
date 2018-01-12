// @flow
// Action Creator function
export const selectedUser = (user: Object) =>
	// Action
	({
		type: 'USER_SELECTED',
		payload: user,
	});
