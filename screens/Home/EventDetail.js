import React, {useState, useEffect} from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Platform,
    TouchableOpacity
} from 'react-native'

import styled from 'styled-components/native';

import { FONTS, SIZES, COLORS, icons, dummyData, images }
    from "../../constants";

import moment from 'moment';

import LinearGradient from "expo-linear-gradient";

const EventDetail = ({navigation, route}) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        let {selectedEvent} = route.params;
        setSelectedEvent(selectedEvent);
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    backgroundColor: COLORS.black
                }}
                style={{
                    backgroundColor: COLORS.black
                }}
            > 
                <ImageBackground
                    resizeMode= 'cover'
                    source= {selectedEvent?.image}
                    style={{
                        width: '100%',
                        height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5
                    }}
                ></ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EventDetail;