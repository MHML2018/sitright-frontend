// @flow
import * as React from "react";
import { connect } from "react-redux";
import LeaderBoardPage from "../../stories/screens/LeaderBoardPage";
import leaderBoardData from "./data";

export interface Props {
	navigation: any
}

export interface State {}

class LeaderBoardContainer extends React.Component<Props, State> {

	render() {
		//sort leader board data
		var sorted = leaderBoardData.slice(0);
		sorted.sort(function(a,b) {
			return b.born - a.score; //reverse
		});
		
		var myName = "Jon";
		
		
		return (
		<LeaderBoardPage navigation={this.props.navigation} data={sorted} myName={myName}/>
		);
	}
}

function bindAction(dispatch) {
	return {
		
	};
}

const mapStateToProps = state => ({
	
});

export default connect(mapStateToProps, bindAction)(LeaderBoardContainer);