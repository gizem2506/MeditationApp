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
            <TouchableOpacity style={styles.ibutton}>
              <Text style={styles.ilhambuttonText}>İlham Al </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ilhambutton}>
              <Text style={styles.buttonText}>Yazıyorum</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ilhambutton}>
              <Text style={styles.buttonText}>Çiziyorum</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ilhambutton}>
              <Text style={styles.buttonText}>Düşünüyorum</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ilhambutton}>
              <Text style={styles.buttonText}>Besteliyorum</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.veyatext}>veya</Text>
        <View>
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
              <Text>Ortamı bul</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Mood')}>
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
  ilhambuttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#6320EE',
    textAlign: 'center',
  },
  ibutton: {
    backgroundColor: '#6320EE',
    borderStyle: 'solid',
    borderColor: '#6320EE',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    margin: 2,
  },
  ilhambutton: {
    backgroundColor: '#ffffff',
    borderStyle: 'solid',
    borderColor: '#6320EE',
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
    margin: 2,
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
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  ilhamcontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 8,
    padding: 20,
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttoncontainer: {},
  veyatext: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 5,
  },
  dropdown: {
    borderRadius: 20,
    backgroundColor: '#F3F0FA',
    borderColor: '#F3F0FA',
    borderRadius: 10,
  },
  ortamtext: {
    textAlign: 'center',
    padding: 10,
  },
  ortam: {
    backgroundColor: '#6320EE',
  },
});
