import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native';

import { FilterModal } from "../";

import {
    HorizontalFoodCard,
    VerticalFoodCard,
} from "../../components"

import DateBox from '../../components/DateBox';

import styled from 'styled-components/native';

import { FONTS, SIZES, COLORS, icons, dummyData, images }
    from "../../constants";

import moment from 'moment';

const Section = ({ title, onPress, children }) => {
    return (
        <View>
            {/* Header */}
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20
                }}
            >
                <Text style={{ flex: 1, ...FONTS.h3 }}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Content */}
            {children}
        </View>
    )
}


const DateSquare = styled.View`
    width: 60px;
    height: 60px;
    border-radius: 15;
    background-color: ${COLORS.white};
    justify-content: center;
    align-items: center;
`;

const Home = ({ navigation }) => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)

    const [selectedMenuType, setSelectedMenuType] = React.useState(1)

    const [popular, setPopular] = React.useState([])

    const [recommends, setRecommends] = React.useState([])

    const [menuList, setMenuList] = React.useState([])

    const [showFilterModal, setShowFilterModal] = React.useState(false)

    const [dateToday, setDateToday] = React.useState([])


    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])


    // Handler
    function handleChangeCategory(categoryId, menuTypeId) {
        // Retrieve the popular menu
        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

        // Retrieve the recommended menu
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

        // Find menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

        // Retrieve dates
        let selectedTodayDate = dummyData.dates.find(a => a.name == "Today")

        // Set the popular menu based on categoryId
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))

        // Set the recommended menu based on categoryId
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        // Set the menu based on categoryId
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))

        // Set today date based on categoryId
        setDateToday(selectedTodayDate?.list.filter(a => a.categories.includes(categoryId)))
    }



    // Render


    const _renderItem = ({ item, index, navigation }) => {
        return (
            <TouchableWithoutFeedback
                onPress={()=>{
                    console.log(navigation);
                    navigation?.navigate("EventDetail", {selectedEvent: item});
                }}
            >
                <View
                    style={{
                        marginLeft: index === 0 ? 30 : 20,
                        marginRight: index === dummyData.events.length - 1 ? 30 : 0
                    }}
                >
                    <ImageBackground source={item.image}
                        resizeMode='cover'
                        borderRadius={SIZES.radius}
                        style={{
                            width: SIZES.width / 2 + 70,
                            height: SIZES.width / 2 + 70,
                            justifyContent: 'space-between'
                        }}
                    >
                        <View
                            style={{
                                alignItems: 'flex-end',
                                marginHorizontal: 15,
                                marginVertical: 15
                            }}
                        >
                            <DateSquare>
                                <Text
                                    style={{
                                        letterSpacing: 2
                                    }}
                                >
                                    {moment(item.startingTime).format('MMM').toUpperCase()}
                                </Text>
                                <Text
                                    style={{
                                        ...FONTS.h2
                                    }}
                                >
                                    {moment(item.startingTime).format('DD')}
                                </Text>
                            </DateSquare>
                        </View>
                        <View
                            style={{
                                marginLeft: 20,
                                marginBottom: 25
                            }}
                        >
                            <Text style={{ ...FONTS.body3 }}>{item.type}</Text>
                            <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
                        </View>

                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    function renderCategoryData() {
        return (
            <View>
                <FlatList
                    horizontal
                    contentContainerStyle={{}}
                    keyExtractor={(item) => 'event_' + item.id}
                    data={dummyData.events}
                    renderItem={_renderItem}
                >

                </FlatList>
            </View>
        )
    }

    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}

                />

                {/* Text input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="Search event..."
                />

                {/* Filter Button */}
                <TouchableOpacity
                    onPress={() => setShowFilterModal(true)}
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>

            </View>
        )
    }

    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menu.length - 1 ?
                                SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId, item.id)
                        }}
                    >
                        <Text
                            style={{
                                color: selectedMenuType == item.id ?
                                    COLORS.primary : COLORS.black, ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

    function renderRecommendedSection() {
        return (
            <Section
                title="Events This Week"
                onPress={() => console.log("Show all recommended")}
            >
                <FlatList
                    horizontal
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ?
                                    SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalFoodCard")}

                        >

                        </HorizontalFoodCard>

                    )}

                />
            </Section>
        )
    }

    function renderEventsTodaySection() {
        return (
            <Section
                title="Events Today NEW"
            >
                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <DateBox
                            containerStyle={{
                                height: 260,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ?
                                    SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150
                            }}
                            item={item}
                        />
                    )}
                />
            </Section>
        )
    }

    function renderPopularSection() {
        return (
            <Section
                title="Events Today"
                onPress={() => console.log("Show all popular items")}
            >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ?
                                    SIZES.padding : 18,
                                marginRight: index == popular.length - 1 ?
                                    SIZES.padding : 0
                            }}
                            item={item}
                            onPress={() => console.log("Vertical Food Court")}
                        />
                    )}
                />
            </Section>
        )
    }

    function renderFoodCategories() {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            height: 55,
                            marginTop: SIZES.padding,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.categories.length - 1 ?
                                SIZES.padding : 0,
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor: selectedCategoryId == item.id ?
                                COLORS.primary : COLORS.lightGray2
                        }}
                        onPress={() => {
                            console.log(item.name)
                            setSelectedCategoryId(item.id)
                            handleChangeCategory(item.id, selectedMenuType)
                        }}
                    >
                        <Image
                            source={item.icon}
                            style={{
                                marginTop: 5,
                                height: 50,
                                width: 50
                            }}
                        />

                        <Text
                            style={{
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ?
                                    COLORS.white : COLORS.darkGray,
                                ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            >

            </FlatList>
        )
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Search */}
            {renderSearch()}

            {showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />
            }

            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}

                ListHeaderComponent={
                    <View>
                        {/* Books n stuff */}
                        {renderCategoryData()}

                        {/* Food Categories */}
                        {renderFoodCategories()}

                        {/* Todays events */}
                        {renderEventsTodaySection()}

                        {/* Popular */}
                        {renderPopularSection()}

                        {/* Recommended */}
                        {renderRecommendedSection()}

                        {/* Menu type */}
                        {renderMenuTypes()}
                    </View>
                }

                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalFoodCard")}
                        >

                        </HorizontalFoodCard>
                    )
                }}

            />

        </View>
    )
}

export default Home;