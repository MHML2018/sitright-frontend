// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import datas from "./data";
import { fetchList, vibrate } from "./actions";
import { Vibration } from "react-native";
export interface Props {
	navigation: any,
	fetchList: Function,
	lastVib: any,
	vibrate: Function,
	data: Object,
}

export interface State {}
class HomeContainer extends React.Component<Props, State> {

	refreshData() {
		const jsonurl = "http://mhml-demo.cmpoon.com:8000/";
		//const jsonurl = "http://192.168.0.210:8000/";
		this.props.fetchList(jsonurl);
	}
	
	callVibrate() {
		//this.props.vibrate();
		//
		
	}

	componentDidMount() {
		this.refreshData();
	}
	render() {
		return (
		<Home navigation={this.props.navigation} list={this.props.data} onRefresh={() => this.refreshData()} onVibrate={() => this.callVibrate()}/>
		);
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
		vibrate: time => dispatch(vibrate(time)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
	lastVib: state.homeReducer.lastVib,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
