import React, { useState, useEffect } from "react";
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

const EventDetail = ({ navigation, route }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        let { selectedEvent } = route.params;
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
                    resizeMode='cover'
                    source={selectedEvent?.image}
                    style={{
                        width: '100%',
                        height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5
                    }}
                >
                    <View style={{ flex: 1 }}>
                        {/* Image Header */}
                        <SectionImageHeader>
                            <TouchableOpacity
                                style={{
                                    width: 56,
                                    height: 40,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 10
                                }}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                {/* CHANGE TO BACK ARROW */}
                                {/* Icon */}
                                <Image
                                    source={icons.favourite}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: COLORS.black
                                    }}
                                />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: 96,
                                    height: 40,
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    borderRadius: 10
                                }}
                            >
                                <TouchableOpacity>
                                    {/* Icon */}
                                    <Image
                                        source={icons.favourite}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.white,
                                            marginLeft: 16
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                        </SectionImageHeader>

                        {/* Image Footer */}
                        <SectionImageFooter>
                            <LinearGradient
                                colors = {['transparent', '#000']}
                                start = {{x: 0, y: 0}}
                                end = {{x: 0, y: 1}}
                                style={{
                                    width: '100%',
                                    height: 400,
                                    justifyContent: 'flex-end'
                                }}
                                    
                            >
                                <FooterContentView>
                                    <View>
                                        <Text style={{ letterSpacing: 2}}>{selectedEvent?.type}</Text>
                                        <Text>{selectedEvent?.title}</Text>
                                        <Text>
                                            STARTING {moment(selectedEvent?.startingTime).format('hh:mm A')}
                                        </Text>
                                    </View>

                                    <LinearGradient
                                        colors = {COLORS.primary}
                                        start = {{x: 0, y: 1}}
                                        end = {{ x: 1, y: 1}}
                                        style = {{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 15,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text>
                                            {moment(selectedEvent.startingTime)
                                                .format('MMM')
                                                .toUpperCase()}
                                        </Text>
                                        <Text>
                                            {moment(selectedEvent.startingTime)
                                                .format('DD')
                                            }
                                        </Text>
                                    </LinearGradient>
                                </FooterContentView>

                            </LinearGradient>
                                        
                        </SectionImageFooter>
                    </View>
                </ImageBackground>
                {/* Buttons group section */}
                <ButtonSection>

                    <TouchableOpacity
                        style={{
                            width: 76,
                            height: 32,
                            borderRadius: 10,
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color: COLORS.black}}>ABOUT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            width: 93,
                            height: 32,
                            borderRadius: 10,
                            backgroundColor: COLORS.white,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color: COLORS.black}}>PARTICIPANTS</Text>
                    </TouchableOpacity>

                </ButtonSection>
            </ScrollView>
        </View>
    )
}

const ButtonSection = styled.View`
    margin: 15px 30px;
    flex-direction: row;
    justify-content: space-between;
`;

const FooterContentView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 30px;

`;

const SectionImageFooter = styled.View`
    flex: 1;
    justify-content: flex-end;
    position: relative;
    z-index: -1;
`;

const SectionImageHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${Platform.OS === 'ios' ? '40px' : '20px'}

`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EventDetail;