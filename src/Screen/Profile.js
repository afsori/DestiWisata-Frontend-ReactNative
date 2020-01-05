import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, StatusBar} from 'react-native';
import {Header, Body, Icon, Text, Title} from 'native-base';

import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor: '#fdfbfb'}}>
          <View style={{marginTop: 0}}>
            <Icon
              onPress={() => this.props.navigation.goBack()}
              style={{color: 'black', marginTop: 15, marginLeft: 10}}
              name="arrow-back"
            />
          </View>
          <View>
            <Title style={{color: 'black', marginLeft: 110, marginTop: 15}}>
              Profile
            </Title>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{
                  marginTop: 18,
                  marginLeft: 80,
                  borderRadius: 10,
                  height: 22,
                  width: 50,
                  textAlign: 'center',
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>

          <Body style={{flexDirection: 'row'}}></Body>
        </Header>
      </View>
    );
  }
}
