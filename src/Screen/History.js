import React, {Component} from 'react';
import {View, StatusBar, ImageBackground} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Text,
  Title,
} from 'native-base';

export default class History extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#fdfbfb'}}>
          <View style={{marginTop: 0}}>
            <Icon
              onPress={() => this.props.navigation.goBack()}
              style={{color: 'black', marginTop: 15, marginLeft: 10}}
              name="arrow-back"
            />
          </View>

          <Body style={{flexDirection: 'row'}}>
            <Title style={{color: 'black', marginLeft: 110}}>History</Title>
          </Body>
        </Header>

        <Text style={{textAlign: 'center', fontSize: 30}}>History Empty</Text>
      </Container>
    );
  }
}
