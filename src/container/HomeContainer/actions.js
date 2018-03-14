import { Vibration } from "react-native";

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

export function vibrate(time: any) {
	return {
		type: "VIBRATE",
		lastVib: time,
	};
}

export function fetchList(url: any) {
	return function(dispatch, getState) {
		
	
	fetch(url+"ble")
	.then(function(response){
			
	})
	.catch((error) => {
		
	});
		
	fetch(url)
	.then(e => e.json())
		.then(function(response){
			//console.log("Update successful: "+url);
			//console.log(response);
			dispatch(fetchListSuccess(response, url));
			dispatch(listIsLoading(false));
			//Call next update
			 setTimeout(() => {
				 dispatch(fetchList(url))
			 }, 500);
		
			const state = getState();
			
			if (typeof response !== 'undefined' && response.occupied){
				const vibInterval = 10000;
				const lastVib = state.homeReducer.lastVib;
				
				var time = (new Date()).getTime();
				
				if (response.posture > 0 && time - lastVib > vibInterval){
					console.log("Vibrate! Time since last: "+(time - lastVib));
					dispatch(vibrate(time));
					Vibration.vibrate();
				}else if (response.posture == 0){
					Vibration.cancel();
				}
			}
		}
		)
		.catch((error) => {
			console.log("Uh-oh! Cannot connect to chair :'(");
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
