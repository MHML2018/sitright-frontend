export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}

export function fetchListSuccess(list: Object, url: any) {
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
			console.log("Update successful: "+url);
			console.log(response);
			dispatch(fetchListSuccess(response, url));
			dispatch(listIsLoading(false));
			//Call next update
			 setTimeout(() => {
				 dispatch(fetchList(url))
			 }, 500);
		})
		.catch((error) => {
			console.warn("Uh-oh! Cannot connect to chair :'(");
			/*Toast.show({
        text: "Uh-oh! Cannot connect to chair :'(",
        duration: 1000,
        position: "bottom",
        textStyle: { textAlign: "center" }
      });*/
			dispatch(listIsLoading(false));
			//console.error(error,"Error: cannot load json! uh-oh!");
		});
		dispatch(listIsLoading(true));
	};

}
