import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Video from 'react-native-video';
const {height} = Dimensions.get('window');

function Environment(props) {
  return (
    <View style={styles.container}>
      <Video
        playInBackground={true}
        source={props?.video}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
      />
    </View>
  );
}

export default Environment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
});
