export function fetchListSuccess(list: Object, url: any) {
	return {
		type: "FETCH_GRAPH_SUCCESS",
		graph,
	};
}

export function fetchList(url: any) {
	return function(dispatch, getState) {
	fetch(url)
	.then(e => e.json())
		.then(function(response){
			console.log("Graph data fetch successful: "+url);
			console.log(response);
			dispatch(fetchListSuccess(response, url));
			//Call next update
			 setTimeout(() => {
				 dispatch(fetchList(url))
			 }, 500);
		})
		.catch((error) => {
			console.warn("Cannot get graph data!");
			/*Toast.show({
        text: "Uh-oh! Cannot connect to chair :'(",
        duration: 1000,
        position: "bottom",
        textStyle: { textAlign: "center" }
      });*/
			//console.error(error,"Error: cannot load json! uh-oh!");
		});
	};

}
