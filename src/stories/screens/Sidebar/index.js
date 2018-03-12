import * as React from "react";
import { Image, Platform } from "react-native";
import { Text, Container, List, ListItem, Content,  Header, Body, Title, View, Icon } from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	{
		route: "GraphPage",
		caption: "Past Postures",
	},
	{
		route: "ScorePage",
		caption: "Goals",
	},
	{
		route: "ScorePage",
		caption: "Friends",
	},
	{
		route: "ScorePage",
		caption: "Settings",
	},
	{
		route: "Login",
		caption: "Logout",
	},
];

export interface Props {
	navigation: any,
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 150 }}>
					<Body style={{ alignItems: "center" }}>
					<Icon name="person" style={{ fontSize: 34 }} />
						<Title>Jon Rawlinson</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								36 SitRight! Days
							</Text>
						</View>
					</Body>
				</Header>

				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.route === "Login"
											? this.props.navigation.dispatch(resetAction)
											: this.props.navigation.navigate(data.route);
									}}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
