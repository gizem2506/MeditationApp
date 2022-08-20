import React, {memo} from 'react';
import {Pressable,Image} from 'react-native';

export const CustomImage = memo(
  ({source, width, height, resizeMode, style, isUri, onPress}) => {
    const sourceValue = isUri
      ? {uri: source}
      : source;

    const renderImage = () => (
      <Image
        style={[{...style}, {width, height}]}
        source={sourceValue}
        resizeMode={resizeMode || 'contain'}
      />
    );

    if (onPress) {
      return <Pressable onPress={onPress}>{renderImage()}</Pressable>;
    }
    return renderImage();
  },
);
