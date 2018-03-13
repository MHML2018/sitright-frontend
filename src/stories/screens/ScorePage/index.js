import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View} from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class ScorePage extends React.Component<Props, State> {
	
	
	
	render() {
		const param = this.props.navigation.state.params;
		const iconDim = 100;
		const rowStyle = {flex:1, flexDirection: "row", alignItems :"center", flexWrap: "wrap"};
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Your Badges"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
               <View style={{flex:1, flexDirection: "column", justifyContent: 'space-between'}}>
                  <View style={rowStyle}>
                     <Image style={{width: iconDim, height: iconDim}} source={require('../../../../assets/login_medal.png')} />
                     <Text>You have logged in 36 days in a row!</Text>
                  </View>
                  <View style={rowStyle}>
                     <Image style={{width: iconDim, height: iconDim}} source={require('../../../../assets/friend_medal.png')} />
                     <Text>You have the longest streak of your friends</Text>
                  </View>
                  <View style={rowStyle}>
                     <Image style={{width: iconDim, height: iconDim}} source={require('../../../../assets/target_met.png')} />
                     <Text>You met your score target for this week</Text>
                  </View>
                  <View style={rowStyle}>
                     <Image style={{width: iconDim, height: iconDim}} source={require('../../../../assets/top_score_grey.png')} />
                     <Text>You have lost against your friends: Matt has the high score of 79</Text>
                  </View>
               </View>
				</Content>
			</Container>
		);
	}
}

export default ScorePage;
