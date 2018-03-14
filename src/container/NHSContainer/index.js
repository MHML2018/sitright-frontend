// @flow
import * as React from "react";
import { connect } from "react-redux";
import NHSPage from "../../stories/screens/NHSPage";

export interface Props {
	navigation: any,
	data: Object,
}

export interface State {}
class NHSContainer extends React.Component<Props, State> {


	componentDidMount() {
		
	}
	render() {
		return (
		<NHSPage navigation={this.props.navigation} />
		);
	}
}

function bindAction(dispatch) {
	return {
		
	};
}

const mapStateToProps = state => ({
	
});
export default connect(mapStateToProps, bindAction)(NHSContainer);
