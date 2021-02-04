import React, { Component } from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon, Body, Title, Button } from 'native-base';

import { Block, Card, Text, IconImage, Label } from '../components';
import * as theme from '../constants/theme';

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerText: {
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class TransactionInformation extends Component {

    static navigationOptions = {
        header: null,
        drawerIcon : ({tintColor}) => (
            <Icon name="home" style={{fontSize:24,  color: tintColor}} />
        )
      };

      componentDidMount(){
          console.log(this.props, 'NAV')
      }

  render() {
    return (
        <React.Fragment>
        <Header>
          <Left style={{ flex: 1 }}>
             <Button transparent>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                  </Button>
              </Left>
              <Body style={styles.headerText}>
                <Title>HISTORIQUE</Title>
            </Body>
            <Right  style={{ flex: 1 }}>
            </Right>
          </Header>
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>

          <Card
            title="HISTORIQUE"
            style={[styles.margin, { marginTop: 18 }]}
          >
            
          </Card>
        </ScrollView>
      </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default TransactionInformation;