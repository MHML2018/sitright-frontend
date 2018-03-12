// @flow
import * as React from "react";
import { connect } from "react-redux";
import GraphPage from "../../stories/screens/GraphPage";
import { fetchList } from "./actions";

export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
   graph: Object,
}

export interface State {}
class GraphContainer extends React.Component<Props, State> {

	refreshData() {
		const jsonurl = "http://mhml-demo.cmpoon.com:8000/history";
		this.props.fetchList(jsonurl);
	}

	componentDidMount() {
		this.refreshData();
	}
	render() {
		return (
		<GraphPage navigation={this.props.navigation} data={this.props.graph} onRefresh={() => this.refreshData()}/>
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
   graph: state.homeReducer.graphData,
});
export default connect(mapStateToProps, bindAction)(GraphContainer);
