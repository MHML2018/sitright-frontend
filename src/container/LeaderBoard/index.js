// @flow
import * as React from "react";
import { connect } from "react-redux";
import LeaderPage from "../../stories/screens/LeaderPage";
import { fetchList } from "./actions";

export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
   graph: Object,
}

export interface State {}
class LeaderBoard extends React.Component<Props, State> {

	render() {
		return (
		<LeaderPage navigation={this.props.navigation} data={this.props.graph}/>
		);
	}
}
