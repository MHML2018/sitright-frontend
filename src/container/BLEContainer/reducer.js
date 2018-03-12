const initialState = {
	raw_data: [],
	isBLEConnected: true,
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "BLE_PUSH_SUCCESS") {

		return {
			...state,
			raw_data: action.raw_data,
		};
	}
	if (action.type === "BLE_CONNECTING") {
		return {
			...state,
			isBLEConnected: action.isBLEConnected,
		};
	}
	return state;
}
