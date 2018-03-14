const initialState = {
	list: [],
	isLoading: true,
    graphData: [],
	lastVib: 0,
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "FETCH_LIST_SUCCESS") {

		return {
			...state,
			list: action.list,
		};
	}
	if (action.type === "LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
   if (action.type == "FETCH_GRAPH_SUCCESS") {
      return {
         ...state,
         graphData: action.graph,
      };
   }
   if (action.type == "VIBRATE") {
      return {
         ...state,
         lastVib: action.lastVib,
      };
   }
	return state;
}
