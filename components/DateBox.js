import React from "react";

import {
    TouchableOpacity,
    View, 
    Text,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from "../constants";

const DateBox = ({ containerStyle, imageStyle, item, onPress}) => {

    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray1,
                ...containerStyle
            }}
        >
            {/* Info */}
            <View
                style={{
                    // flex: 1,
                    marginLeft: 50,
                    marginRight: 50,
                    alignItems: 'center'
                }}
            >
                {/* Name */}
                <Text style={{...FONTS.h3, fontSize: 17}}>
                    NOV
                </Text>

                {/* Description */}
                <Text style={{...FONTS.body4, color: COLORS.darkGray2}}>
                    18
                </Text>

            </View>
            
            {/* Image */}
            {/* <Image
                source={item.image}
                style={imageStyle}
            /> */}

            {/* Info */}
            <View
                style={{
                    flex: 1
                }}
            >
                {/* Name */}
                <Text style={{...FONTS.h3, fontSize: 17}}>
                    {item.name}
                </Text>

                {/* Description */}
                <Text style={{...FONTS.body4, color: COLORS.darkGray2}}>
                    {item.description}
                </Text>

                {/* Price */}
                <Text style={{...FONTS.h2, marginTop: SIZES.base}}>
                    {item.price}
                </Text>

            </View>
        
            {/* Calories */}
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius
                }}
            >
                <Image 
                    source={icons.bookmark}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                {/* <Text
                    style={{ color: COLORS.darkGray2, ...FONTS.body5 }}
                >
                    {item.calories} Calories
                </Text> */}
            </View>
        </TouchableOpacity>
    )
    
}

export default DateBox;