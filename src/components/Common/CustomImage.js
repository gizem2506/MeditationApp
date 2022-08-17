import React, {memo} from 'react';
import {Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';

export const CustomImage = memo(
  ({source, width, height, resizeMode, style, isUri, onPress}) => {
    const sourceValue = isUri
      ? {uri: source, priority: FastImage.priority.normal}
      : source;

    const renderImage = () => (
      <FastImage
        style={[{...style}, {width, height}]}
        source={sourceValue}
        resizeMode={resizeMode || FastImage.resizeMode.contain}
      />
    );

    if (onPress) {
      return <Pressable onPress={onPress}>{renderImage()}</Pressable>;
    }
    return renderImage();
  },
);
