import React, {memo}  from  'react'
import FastImage from 'react-native-fast-image'


export const CustomImage = memo(({source,width,height,resizeMode,style, isUri }) =>{
    const sourceValue = isUri ? {uri: source,priority: FastImage.priority.normal} : source;
    return  (
        <FastImage
            style={[{...style},{ width, height }]}
            source={sourceValue}
            resizeMode={resizeMode || FastImage.resizeMode.contain}
        />
    )
})
