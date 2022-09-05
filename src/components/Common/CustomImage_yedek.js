import React, {memo} from 'react';
import {Pressable, Image} from 'react-native';

export const CustomImage = memo(
  ({source, width, height, resizeMode, style, isUri, onPress, color}) => {
    const sourceValue = isUri ? {uri: source} : source;
    const renderImage = () => (
      <Image
        style={[{...style}, {width, height}, {color: 'purple'}]}
        source={sourceValue}
        resizeMode={resizeMode || 'contain'}
      />
    );

    if (onPress) {
      return <Pressable onPress={onPress}>{renderImage()}</Pressable>;
    }
    // return renderImage();
  },
);
export default CustomImage;
4;
