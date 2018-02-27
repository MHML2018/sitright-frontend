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
  View
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
//  thumburi: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {

    var thumburi = require("../../../../assets/down.png");
    if (typeof this.props.list !== 'undefined' && this.props.list.posture
      && this.props.list.posture > 0.5){
      thumburi = require("../../../../assets/up.png");
    }


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
            <Title>Posture Now</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <View style={{
               flex: 1,
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
             }}>
              <Image
              style={{width: 422, height: 422}}
              /* source={require("../../../../assets/up.png")} */
              source={thumburi}
            />
          </View>
          <List>
            <ListItem>
              <Text>{"" || "Score: "+this.props.list.posture}</Text>
            </ListItem>
            <ListItem>
              <Text>{"Loading" || this.props.list.ui}</Text>
            </ListItem>

            {/* this.props.list.map((item, i) => {
             if (i == "posture" || i == "ui"){
              return (
                <ListItem
                  key={i}
                  onPress={() =>
                    this.props.navigation.navigate("ScorePage", {
                      name: { item }
                    })}
                >
                  <Text>{item}</Text>
                </ListItem>
            )
          }
        }) */}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
