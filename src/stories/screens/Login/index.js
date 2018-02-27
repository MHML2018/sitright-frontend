import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
	onMagicLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						{ /*}<Icon name="flash" style={{ fontSize: 104 }} /> */}
						<Image
							source={require("../../../../assets/posture.png")}
							style={
								{
									"width": 210,
									"height": 100
								}
							}
						/>
						<Title>SitRight!</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								Proactive Posture Education
							</Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Sign In</Text>
						</Button>
					</View>
					<View padder>
						<Button block onPress={() => this.props.onMagicLogin()}>
							<Text>Sign In with Facebook</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Sit right with</Text>
						</View>
						<Image
							source={require("../../../../assets/logo-dark.png")}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Login;
