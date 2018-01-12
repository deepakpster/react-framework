export default function (state = null, action) {
	switch (action.type) {
		case 'GREETING_SELECTED':
			return action.payload;
		default:
			return state;
	}
}
