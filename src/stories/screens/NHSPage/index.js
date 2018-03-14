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
}
export interface State {}
class NHSPage extends React.Component<Props, State> {
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
            <Title>NHS Guideline</Title>
          </Body>
          <Right />
        </Header>
        <Content>
		<View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}>
            <Image style={{width: 350, height:500,  alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}} source={require('../../../../assets/nhs.jpg')} />
		</View>
        </Content>
      </Container>
    );
  }
}

export default NHSPage;
