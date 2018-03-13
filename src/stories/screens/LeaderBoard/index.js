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
class LeaderPage extends React.Component<Props, State> {
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
		{ this.props.data.map((person, i) => {
             <ListItem
                  key={person.name}
                  onPress={() =>
                    this.props.navigation.navigate("LeaderBoard", {
                      name: { person.name }
                    })}
                >
                  <Text>{person.name} : </Text>
				  <Text>{person.score}%</Text>
                </ListItem>
            
          }
        })
		}		
          </List>
        </Content>
      </Container>
    );
  }
}

export default LeaderPage;
