import React, {Component} from 'react';
import {View, Text, Thumbnail} from 'native-base';

import {
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {Container} from 'native-base';
import Search from './Search';
class Home extends Component {
  render() {
    return (
      <Container style={style.container}>
        <View>
          <ImageBackground
            source={require('../assets/bgImage.png')}
            style={{
              height: 160,
              width: null,
            }}
          />
          <View style={style.search}>
            <Search />
          </View>
          <View style={style.ContainerMenu}>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('ListAlam');
                  }}>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/11/30-2-Curug-Pulosari-by-jogjajateng-740x740.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text>Alam</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ListAlam')}>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/11/27-1-Resoinangun-Garden-by-andaa-@-pigijoo-740x463.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text>Alam</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ListPantai')}>
                  <Thumbnail
                    square
                    source={{
                      uri:
                        'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/3-1-Pantai-Watu-Nene-by-wachidab-740x555.jpg',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <Text>PANTAI</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://asset.kompas.com/crops/3hqL7cGjQ0PxhVtIZ36kXu30UAc=/0x0:1000x667/750x500/data/photo/2019/01/23/3671701645.jpg',
                  }}
                />
              </View>
              <Text>Hutan</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://i2.wp.com/www.maxmanroe.com/vid/wp-content/uploads/2018/10/Pengertian-Budaya-Menurut-Para-Ahli-min.jpg?resize=640%2C395&ssl=1',
                  }}
                />
              </View>
              <Text>Budaya</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/512/2399/2399341.png',
                  }}
                />
              </View>
              <Text>Lokasi</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/512/2399/2399341.png',
                  }}
                />
              </View>
              <Text>Samsat</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://image.flaticon.com/icons/png/512/2399/2399341.png',
                  }}
                />
              </View>
              <Text>Acara</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//107/MTA-4399739/honda_honda_brio_satya_rs_1-2_mobil___full09_naz7zwse.jpg',
                  }}
                />
              </View>
              <Text>Transport</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://upload.wikimedia.org/wikipedia/commons/8/85/Pulau_Talimago.jpg',
                  }}
                />
              </View>
              <Text>Pulau</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://mytrip123.com/wp-content/uploads/2018/02/wisata-kuliner-jakarta-2.jpg',
                  }}
                />
              </View>
              <Text>Kuliner</Text>
            </View>
            <View style={style.ContentMenu2}>
              <View style={style.ContentMenu}>
                <Thumbnail
                  square
                  source={{
                    uri:
                      'https://i0.wp.com/www.maxmanroe.com/vid/wp-content/uploads/2018/07/Pengertian-Sejarah.jpg?resize=640%2C349&ssl=1',
                  }}
                />
              </View>
              <Text>Sejarah</Text>
            </View>
          </View>
          {/* </ScrollView> */}
        </View>
      </Container>
    );
  }
}

export default Home;
const style = StyleSheet.create({
  container: {
    backgroundColor: '#f3f5f7',
  },
  search: {
    marginTop: '-13%',
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: '-25%',
  },
  ContainerMenu: {
    marginTop: '-5%',
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#f3f5f7',
  },
  ContentMenu: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  ContentMenu2: {
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
    width: 70,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#6d63ff',
    elevation: 0,
  },
});
