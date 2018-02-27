export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchListSuccess(list: Object) {
	return {
		type: "FETCH_LIST_SUCCESS",
		list,
	};
}
export function fetchList(url: any) {

	return function(dispatch, getState) {
	fetch(url)
	.then(e => e.json())
		.then(function(response){
			console.log(response);
			dispatch(fetchListSuccess(response));
			dispatch(listIsLoading(false));
		})
		.catch((error) => {
			console.error(error,"Error: cannot load json! uh-oh!");
		});

		dispatch(listIsLoading(true));
	};

}
