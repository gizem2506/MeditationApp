import React, {useRef, useState} from 'react';
7;
import {
  View,
  TextInput,
  ImageBackground,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Animated,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import {CustomImage} from '../Common/CustomImage';
import HomeScreenButton from '../Common/HomeScreenButton';
import Background from '../Common/Background';
import {Draw, DrawRef} from '@benjeau/react-native-draw';

const {width, height} = Dimensions.get('window');

const HomeScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mutlu', value: 'Mutlu'},
    {label: 'Üzgün', value: 'Üzgün'},
    {label: 'Canı Sıkılmış', value: 'Canı Sıkılmış'},
    {label: 'Heyecanlı', value: 'Heyecanlı'},
  ]);

  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            style={styles.imagecontainer}
            source={Image}
            resizeMode="cover"
            alt="background">
            <Background />
          </ImageBackground>
        </View>
      </View>

      <View style={styles.ilham1Container}>
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
              textColor={'white'}
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
              onPressHandler={() => navigation.navigate('Draw')}
            />
            <HomeScreenButton
              text={'Düşünüyorum'}
              image={require('../../assets/icons/Vectordüşünüyorum.png')}
              onPressHandler={() => navigation.navigate('Think')}
            />
            <HomeScreenButton
              text={'Mesajlaşalım!'}
              image={require('../../assets/icons/comment.png')}
              onPressHandler={() => navigation.navigate('Message')}
            />
          </View>
        </View>
        <Text style={styles.veyatext}>veya</Text>
        <View style={styles.dropdowngenel}>
          <View style={styles.dropdowncontainer}>
            <View style={{flex: 3}}>
              <DropDownPicker
                onChange={e => setValue(e.target.value)}
                style={styles.dropdown}
                placeholder="Bugun nasıl hissediyorsun ?"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Mood')}>
              <Text style={styles.ortam}>Ortamı bul</Text>
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
    marginTop: 80,
    marginBottom: 8,
    padding: 5,
  },

  veyatext: {
    padding: 15,
    color: 'white',
    textAlign: 'center',
  },
  ilhamcontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 5,
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  ilham1Container: {
    padding: 25,
  },
  imagecontainer: {
    height: height,
    width: width,
  },
  ilhamtext: {
    padding: 5,
    color: '#ffffff',
  },
  dropdowncontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  dropdown: {
    borderRadius: 10,
    backgroundColor: '#F3F0FA',
    borderColor: '#F3F0FA',
  },
  ortamtext: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  ortam: {
    backgroundColor: '#6320EE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    flex: 1,
    color: 'white',
  },
});
