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

}
export interface State {}
class GraphPage extends React.Component<Props, State> {
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
            <Title>Past Score</Title>
          </Body>
          <Right />
        </Header>
        <Content>
		<View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}>
            <Image style={{width: 350, height:400,  alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}} source={require('../../../../assets/graph.png')} />
		</View>
        </Content>
      </Container>
    );
  }
}

export default GraphPage;
