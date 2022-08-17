import React, {useState} from 'react';
import {
  View,
  TextInput,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import {CustomImage} from '../Common/CustomImage';
import HomeScreenButton from '../Common/HomeScreenButton';

const {width, height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'One', value: 'One'},
    {label: 'Two', value: 'Two'},
  ]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imagecontainer}
          source={Image}
          resizeMode="stretch"
          alt="background"></ImageBackground>
      </View>
      <View>
        <Text style={styles.ambianchetext}>Ambianche hoş geldiniz!</Text>
        <Text style={styles.ilhamtext}>
          İlhamınızın gelmesi için gerekli ortamlar sağlandı. Hemen aşağıdan
          ilhama ihtiyacınız olan alanı seçin ve gerisini bize bırakın!
        </Text>
        <View style={styles.ilhamcontainer}>
          <View style={styles.buttoncontainer}>
            <HomeScreenButton
              text={'İlham Al'}
              image={'https://cdn-icons-png.flaticon.com/512/44/44386.png'}
              isImageUri
              bgColor={'#6320EE'}
              onPress={null}
            />
            <HomeScreenButton
              text={'Yazıyorum'}
              image={require('../../assets/icons/yazıyorum.png')}
              onPressHandler={() => navigation.navigate('Write')}
            />
            <HomeScreenButton
              text={'Çiziyorum'}
              image={require('../../assets/icons/Vectorçiziyorum.png')}
              onPress={null}
            />
            <HomeScreenButton
              text={'Düşünüyorum'}
              image={require('../../assets/icons/Vectordüşünüyorum.png')}
              onPress={null}
            />
            <HomeScreenButton
              text={'Besteliyorum'}
              image={require('../../assets/icons/Vectorbesteliyorum.png')}
              onPress={null}
            />
          </View>
        </View>
        <Text style={styles.veyatext}>veya</Text>
        <View style={styles.dropdowngenel}>
          <View style={styles.dropdowncontainer}>
            <DropDownPicker
              style={styles.dropdown}
              placeholder="Bugun nasıl hissediyorsun ?"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
            <TouchableOpacity style={styles.ortam}>
              <Text style={{color: 'white'}}>Ortamı bul</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Mood')}>
          <Text style={styles.ortamtext}>Tüm ortamları gör</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  ambianchetext: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 40,
    marginTop: 100,
    marginBottom: 8,
    padding: 5,
  },
  /*ilhambuttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
*/
  buttoncontainer: {},
  veyatext: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 5,
  },
  ilhamcontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 3,
    padding: 10,
    margin: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },

  imagecontainer: {
    height: height,
    width: width,
  },
  ilhamtext: {
    padding: 5,
  },
  dropdowncontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dropdown: {
    borderRadius: 20,
    backgroundColor: '#F3F0FA',
    borderColor: '#F3F0FA',
    width: '75%',
  },
  ortamtext: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  ortam: {
    backgroundColor: '#6320EE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10
  },
});
