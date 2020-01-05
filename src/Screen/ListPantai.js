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
import {Icon, Card, CardItem} from 'native-base';
import {TextInput, TouchableOpacity} from 'react-native';

class ListPantai extends Component {
  render() {
    console.log(this.data);

    return (
      <View style={styles.content}>
        <View>
          <Image
            source={{
              uri:
                'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/4-1-Pantai-Sedahan-by-meettheexplorer_-740x447.jpg',
            }}
            style={styles.image}
          />
          <Icon
            style={styles.icon}
            name="arrow-back"
            onPress={() => this.props.navigation.goBack()}
          />

          <View>
            <Text style={styles.titlebook}>PANTAI</Text>
          </View>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.searchContainer}>
            <Icon type="Ionicons" name="ios-search" style={styles.searchIcon} />

            <TextInput placeholder="cari Alam.." style={styles.textInput} />
          </View>
        </View>
        <ScrollView>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DetailPantai')}>
              <Card style={styles.contentcard}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/4-1-Pantai-Sedahan-by-meettheexplorer_-740x447.jpg',
                    }}
                    style={styles.images}
                  />
                </CardItem>
                <CardItem>
                  <View style={styles.description}>
                    <View>
                      <Text numberOfLines={1}>Pantai Sedahan</Text>
                      <Text numberOfLines={1}>
                        Lokasi : Desa Jepitu, Kecamatan Girisubo, Kabupaten
                        Gunung Kidul, Yogyakarta 55883
                      </Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DetailPantai')}>
              <Card style={styles.contentcard}>
                <CardItem cardBody>
                  <Image
                    source={{
                      uri:
                        'https://indonesia.tripcanvas.co/id/wp-content/uploads/sites/2/2018/10/5-1-Pantai-Grewang-by-ajiie_nugroho-740x463.jpg',
                    }}
                    style={styles.images}
                  />
                </CardItem>
                <CardItem>
                  <View style={styles.description}>
                    <View>
                      <Text numberOfLines={1}>Pantai Grewang</Text>
                      <Text numberOfLines={1}>
                        Lokasi : Desa Jepitu, Kecamatan Girisubo, Kabupaten
                        Gunung Kidul, Yogyakarta 55883.
                      </Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  image: {
    width: 360,
    height: 170,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  titlebook: {
    color: 'white',
    fontSize: 25,
    marginTop: '-10%',
    marginLeft: '40%',
  },
  icon: {color: 'white', marginLeft: '5%', marginTop: '-45%'},
  wrapper: {
    position: 'relative',
    left: 0,
    width: '90%',
    marginTop: '40%',
  },
  searchContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#919191',
    backgroundColor: '#ffffff',
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 100,
    height: 40,
  },
  searchIcon: {
    position: 'absolute',
    left: 14,
    top: 7,
    color: '#919191',
    fontSize: 22,
  },
  textInput: {
    display: 'flex',
    marginLeft: 44,
    color: '#919191',
  },
  images: {
    height: 100,
    width: '100%',

    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  contentcard: {
    width: '90%',
    marginLeft: '5%',
  },
});

export default ListPantai;
