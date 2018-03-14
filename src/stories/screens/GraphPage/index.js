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
	  var graphData = [];
	  if (typeof this.props.data === 'undefined'){
		graphData = [];
	  }else if (typeof this.props.data.data === 'undefined' ){
		graphData = [];
	  }else{
		  graphData = this.props.data.data;
		  
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
            <Title>Past Score</Title>
          </Body>
          <Right />
        </Header>
        <Content>
		<View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}>
            <Image style={{width: 350, height:400,  alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center'}} source={require('../../../../assets/graph.png')} />
		</View>
		<View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch'}}>
            <List>
		{
		
		graphData.map((item, i) => {
			var timeNow = Date.now();
			//if (item.x > (timeNow/1000 - 60)){
			if (true){
				return (
                <ListItem  >
					<Text>{item.x} : {Math.round(item.y*100)+"%"}</Text>
                </ListItem>
				)
			}          
        })
				
		}	
        </List>
		</View>
        </Content>
      </Container>
    );
  }
}

export default GraphPage;
