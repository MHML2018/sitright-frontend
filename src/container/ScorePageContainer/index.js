// @flow
import * as React from "react";
import ScorePage from "../../stories/screens/ScorePage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class ScorePageContainer extends React.Component<Props, State> {
	render() {
		return <ScorePage navigation={this.props.navigation} />;
	}
}
