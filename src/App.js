// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import ScorePage from "./container/ScorePageContainer";
import GraphPage from "./container/GraphContainer";
import LeaderBoardPage from "./container/LeaderBoardContainer";
import NHSPage from "./container/NHSContainer";
import Sidebar from "./container/SidebarContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		ScorePage: { screen: ScorePage },
        GraphPage: { screen: GraphPage },
	    LeaderBoardPage: { screen: LeaderBoardPage },
		NHSPage: { screen: NHSPage },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
