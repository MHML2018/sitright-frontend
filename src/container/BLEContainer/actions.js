
export function pushBLEdata(url: any, data:any) {
	return function(dispatch, getState) {
	fetch(url,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bledata: data,
      key: '1234',
    })
  })
	.then(e => e.json())
		.then(function(response){
			console.log("Push successful: "+url);
			console.log(response);
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
