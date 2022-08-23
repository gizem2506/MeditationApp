import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const kelimeler = [
  'Lorem 1',
  'Lorem 2',
  'Lorem 3',
  'Lorem 4',
  'Lorem 5',
  'Lorem 6',
  'Lorem 7',
  'Lorem 8',
  'Lorem 9',
  'Lorem 10',
  'Lorem 11',
  'Lorem 12',
  'Lorem 13',
  'Lorem 14',
  'Lorem 15',
  'Lorem 16',
];

export default function Kelimeler(props) {
  const list =
    props.kelimeler && props.kelimeler.length > 0 ? props.kelimeler : kelimeler;
  return (
    <View style={styles.container}>
      <View style={styles.listBody}>
        {list.map((item, index) => {
          return (
            <View style={styles.textBody} key={index}>
              <Text style={styles.textStyle}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  textBody: {
    fontWeight: 'bold',
    paddingRight: 10,
    margin: 9,
    width: Dimensions.get('window').width /7,
  },
  textStyle: {
    color: 'white',
    marginTop: 7,
  },
});
