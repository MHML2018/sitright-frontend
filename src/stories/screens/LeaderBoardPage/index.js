import * as React from "react";
import { Image, Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  StyleSheet, 
  View
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  data: any;
  myName: any;
}
export interface State {}

class LeaderBoardPage extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>Leaderboard</Title>
          </Body>
          <Right />
        </Header>
        <Content>
		<List>
			{ this.props.data.map((item, i) => {
				return (
                <ListItem key={item.name} >
					{ 
					(item.name != this.props.myName ?
					(
					<Text>{item.name} : {item.score}</Text>
					):(
					<Text style={{fontWeight: 'bold'}}>You! : {item.score}</Text>
					)
					)
					}
                </ListItem>
            )
          
        })}	
        </List>
        </Content>
      </Container>
    );
  }
}

export default LeaderBoardPage;