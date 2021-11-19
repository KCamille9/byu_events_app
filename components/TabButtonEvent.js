import React from "react";

import {
    TouchableOpacity,
    TouchableWithoutFeedback,
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

const TabButtonEvent = ({ label, icon, isFocused, outerContainerStyle, innerContainerStyle,
    onPress }) => {
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Animated.View
                style={[
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    outerContainerStyle
                ]}
            >
                <Animated.View
                    style={[
                        {
                            flexDirection: 'row',
                            width: 120,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        },
                        innerContainerStyle
                    ]}
                >
                    {
                        <Text
                            numberOfLines={1}
                            style={{
                                color: COLORS.gray,
                                ...FONTS.h6
                            }}
                        >
                            {label}
                        </Text>
                    }
                </Animated.View>

            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

export default TabButtonEvent;