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

import BLEContainer from "../../../container/BLEContainer";

export interface Props {
  navigation: any;
  list: any;
//  thumburi: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {

    var currentScore = "Please sit on chair for current posture.";
    var thumburi = require("../../../../assets/empty.png");
    if (typeof this.props.list !== 'undefined' && this.props.list.occupied){
      currentScore = (this.props.list.posture>0.5?"Good posture":"Bad posture :(");
      if (this.props.list.posture > 0.5){
        thumburi = require("../../../../assets/up.png");
      }else{
        thumburi = require("../../../../assets/down.png");
      }
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
            <Title>Current Posture</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <View style={{
              marginTop: 20,
               flex: 1,
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
             }}>
              <Image
              style={{width: 300, height: 300}}
              /* source={require("../../../../assets/up.png")} */
              source={thumburi}
            />
          </View>
          <List>
            <ListItem>
              <Text style={{"fontWeight":"bold"}}>Your Posture Stats</Text>
            </ListItem>
            <ListItem
              onPress={() =>
                this.props.onRefresh()}
            >
              <Text>{currentScore}</Text>
            </ListItem>
            <ListItem
                onPress={() =>
                  this.props.onRefresh()}
              >
                <Text>{ "Today's Average: "+(typeof this.props.list.score === "undefined" || this.props.list.score == null?" calculating...":Math.round(this.props.list.score*100)+"%")}</Text>
            </ListItem>
            <ListItem>
              <Text>{this.props.list.ui || "Loading posture information..."}</Text>
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
		  <BLEContainer navigation={this.props.navigation} list={this.props.list} onRefresh={() => this.props.onRefresh()}/>
        </Content>
      </Container>
    );
  }
}

export default Home;
