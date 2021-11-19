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

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {

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
                width: 300,
                padding: SIZES.radius,
                alignItems: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2, ...containerStyle
            }}
        >

            {/* Calories and Favourite */}
            <View style={{ flexDirection: 'row' }}>
                {/* Calories */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image
                        source={icons.calendar}
                        style={{
                            width: 50,
                            height: 20
                        }}
                    />
                    <Text style={{ color: COLORS.darkGray2, ...FONTS.body5 }}>
                        November 18
                    </Text>
                </View>

                {/* Favourite */}
                <Image
                    source={icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                />
            </View>

            {/* Image */}
            <View
                style={{
                    marginTop: 20,
                    height: 150,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.image}
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                />
            </View>

            {/* Info */}
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <Text style={{ ...FONTS.h3 }}> {item.name} </Text>
                <Text style={{ color: COLORS.darkGray2, textAlign: 'center', ...FONTS.body5 }}>
                    {item.description}
                </Text>
                <Text style={{ marginTop: SIZES.radius, ...FONTS.h3 }}>
                    {item.price}
                </Text>
            </View>

            <TabButtonEvent
                label={'See details'}
                icon={icons.home}
                outerContainerStyle={homeFlexStyle}
                innerContainerStyle={homeColorStyle}

                style={{
                    marginTop: 20
                }}
            >

            </TabButtonEvent>

        </TouchableOpacity>

    )

}

export default VerticalFoodCard;