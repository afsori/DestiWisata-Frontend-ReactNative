/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, ImageBackground} from 'react-native';
import {Image} from 'react-native';

import {Container, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

class DetailAlam extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Container style={{padding: 0}}>
          <View style={{marginTop: 0}}>
            <Image
              source={{
                uri:
                  'https://www.pikniek.com/wp-content/uploads/2017/10/000009-02_wisata-alam-di-jogja_hutan-mangrove_800x450min_ccpdm.jpg',
              }}
              style={{
                width: 360,
                height: 230,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                position: 'absolute',
              }}
            />
            <TouchableOpacity>
              <Icon
                onPress={() => this.props.navigation.navigate('ListAlam')}
                style={{color: 'white', marginLeft: 20, marginTop: 12}}
                name="arrow-back"
              />
            </TouchableOpacity>

            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  marginTop: 95,
                  marginLeft: 20,
                  width: 220,
                }}>
                Hutan Mangrove Pasir Mendit Temon
              </Text>
            </View>
          </View>
          <View style={{marginTop: 270, padding: 15}}>
            <Text>
              Kalau kamu termasuk orang yang takut ketinggian, jangan khawatir.
              Masih banyak tempat wisata di Jogja yang tak membuat kamu berdiri
              bergidik, seperti misal Hutan Mangrove Pasir Mendit Temon. Mungkin
              agak aneh ya kalau harus berwisata ke hutan. Namun, tidak untuk
              objek ini. Disini kamu akan akan disuguhi pemandangan tumbuhan
              hijau yang menyegarkan mata. Sebenarnya tempat ini sudah dibangun
              sejak 1989. Namun, baru terkenalnya baru baru ini karena kekuatan
              media sosial.
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
            }}>
            <View
              style={{marginTop: 110, marginLeft: 80, flexDirection: 'row'}}>
              <Image
                style={{
                  width: 100,
                  height: 150,
                  borderRadius: 10,
                  marginLeft: 140,
                }}
                source={{
                  uri:
                    'https://www.pikniek.com/wp-content/uploads/2017/10/000009-02_wisata-alam-di-jogja_hutan-mangrove_800x450min_ccpdm.jpg',
                }}></Image>
            </View>
          </View>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 40,
    color: 'red',
  },
});

export default DetailAlam;
