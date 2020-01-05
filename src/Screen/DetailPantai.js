/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {Image} from 'react-native';
import {Container, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

class DetailPantai extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Container style={{padding: 0}}>
          <View style={{marginTop: 0}}>
            <Image
              source={{
                uri:
                  'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/4-1-Pantai-Sedahan-by-meettheexplorer_-740x447.jpg',
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
              <View>
                <Icon
                  onPress={() => this.props.navigation.goBack()}
                  style={{color: 'black', marginLeft: 60}}
                  name="arrow-back"
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  marginTop: 95,
                  marginLeft: 20,
                }}>
                Pantai Sedahan
              </Text>
            </View>
          </View>
          <View style={{marginTop: 270, padding: 15}}>
            <Text>
              Pantai sepanjang sekitar 100 meter ini berada di balik dua tebing
              sehingga airnya cukup tenang. Apalagi, status “pantai perawan”nya
              membuat airnya sangat jernih. Saat air sedang surut menjelang sore
              hari, berbagai biota laut dapat Anda lihat dengan jelas!. Tidak
              hanya kita saja, penyu pun menyukai pantai ini. Mereka sering
              berbondong-bondong datang untuk bertelur di sini! Karena
              kejernihan airnya juga, Anda bisa melihat jelas ikan-ikan menari
              di antara karang. Maka “gerombolan” lain yang menganggap pantai
              ini adalah “surga” adalah para pemancing ikan. Ternyata memang
              banyak orang yang khusus datang kemari hanya untuk memancing.
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              // flexDirection: 'row',
            }}>
            <View
              style={{marginTop: 110, marginLeft: 80, flexDirection: 'row'}}>
              <Image
                style={{
                  width: 100,
                  height: 150,
                  borderRadius: 10,
                  marginLeft: 140,
                  // marginTop: 100,
                  // marginLeft: 245,
                }}
                source={{
                  uri:
                    'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/4-1-Pantai-Sedahan-by-meettheexplorer_-740x447.jpg',
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

export default DetailPantai;
