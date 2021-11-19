import React from "react";

import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native'

import { COLORS, FONTS, SIZES, icons } from "../constants";

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from 'react-native-reanimated';
import TabButtonEvent from "./TabButtonEvent";



const DateBox = ({ containerStyle, imageStyle, item, onPress }) => {

    // Reanimated Shared Value
    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)

    // Reanimated Animated Style
    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    })

    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

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
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>
                    NOV
                </Text>

                {/* Description */}
                <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
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
                <Text style={{ ...FONTS.h3, fontSize: 17 }}>
                    {item.name}
                </Text>

                {/* Description */}
                <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
                    {item.description}
                </Text>

                {/* Price */}
                <Text style={{ ...FONTS.h4, marginTop: SIZES.base }}>
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

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    borderRadius: SIZES.radius,
                    marginTop: 200
                }}
            >

                <TabButtonEvent
                    label={'See details'}
                    icon={icons.home}
                    outerContainerStyle={homeFlexStyle}
                    innerContainerStyle={homeColorStyle}
                />
            </TouchableOpacity>
        </TouchableOpacity>
        
    )

}

export default DateBox;