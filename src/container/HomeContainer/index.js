// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import BLEContainer from "./BLEContainer";
import datas from "./data";
import { fetchList } from "./actions";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}

export interface State {}
class HomeContainer extends React.Component<Props, State> {

	refreshData() {
		const jsonurl = "http://mhml-demo.cmpoon.com:8000";
		this.props.fetchList(jsonurl);
	}

	componentDidMount() {
		this.refreshData();
	}
	render() {
		return (
		<Home navigation={this.props.navigation} list={this.props.data} onRefresh={() => this.refreshData()}/>
		<BLEContainer />
		);
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
