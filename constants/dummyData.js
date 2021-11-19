import { icons, images } from "./";

const myProfile = {
    name: "ByProgrammers",
    profile_image: images.profile,
    address: "No. 88, Jln Padungan, Kuching"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: icons.burger
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: icons.cherry
    },
    {
        id: 3,
        name: "Rice Item",
        icon: icons.rice
    }
]

const dateCategories = [
    {
        id: 1,
        name: "Today",
        icon: icons.burger
    },
    {
        id: 2,
        name: "Tomorrow",
        icon: icons.cherry
    },
    {
        id: 3,
        name: "This week",
        icon: icons.rice
    }
]

const hamburger = {
    id: 1,
    name: "CS CLUB 1st ACTIVITY",
    description: "BYU CS Club",
    categories: [1, 2],
    price: "This shot is about a simple, elegant, and powerful layout. The design will help to implement a good user experience and flexible user flow.",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/cs_club_first.png")
}

const hotTacos = {
    id: 2,
    name: "Hot Tacos",
    description: "Mexican tortilla & tacos",
    categories: [1, 3],
    price: 10.99,
    calories: 78,
    isFavourite: false,
    image: require("../assets/dummyData/hot_tacos.png")
}

const vegBiryani = {
    id: 3,
    name: "Veg Biryani",
    description: "Indian Vegetable Biryani",
    categories: [1, 2, 3],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/veg_biryani.png")
}

const wrapSandwich = {
    id: 4,
    name: "Wrap Sandwich",
    description: "Grilled vegetables sandwich",
    categories: [1, 2],
    price: 10.99,
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/wrap_sandwich.png")
}

const novEighteen = {
    id: 6,
    name: "November",
    description: "18",
    dateCategories: [1],
    categories: [1, 2]
}

const menu = [
    {
        id: 1,
        name: "Featured",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 2,
        name: "Nearby you",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 3,
        name: "Popular",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            hamburger, hotTacos, vegBiryani,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            hamburger, vegBiryani, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            hamburger, hotTacos, wrapSandwich,
        ]
    },

]

const dates = [
    {
        id: 1,
        list: [
            novEighteen,
        ]
    }

]

const events = [
    {
        id: 1,
        type: 'CONCERT',
        title: 'The Weekend',
        startingTime: '2020/12/21 09:10 PM',
        image: require('../assets/images/other_words_for_home.jpg'),
        description: 'Looking to add web dev or mobile dev experience to your resume or don\'t feel like you know enough to help? We have a project for that.'
    },
    {
        id: 2,
        type: 'SHOW',
        title: 'The Weekend',
        startingTime: '2020/12/15 09:10 PM',
        image: require('../assets/images/other_words_for_home.jpg'),
        description: 'Looking to add web dev or mobile dev experience to your resume or don\'t feel like you know enough to help? We have a project for that.'
    },
    {
        id: 3,
        type: 'CONCERT',
        title: 'The Weekend',
        startingTime: '2020/12/09 09:10 PM',
        image: require('../assets/images/other_words_for_home.jpg'),
        description: 'Looking to add web dev or mobile dev experience to your resume or don\'t feel like you know enough to help? We have a project for that.'
    },
    {
        id: 4,
        type: 'CONCERT',
        title: 'The Weekend',
        startingTime: '2020/12/01 09:10 PM',
        image: require('../assets/images/other_words_for_home.jpg'),
        description: 'Looking to add web dev or mobile dev experience to your resume or don\'t feel like you know enough to help? We have a project for that.'
    },
    {
        id: 5,
        type: 'CONCERT',
        title: 'The Weekend',
        startingTime: '2020/12/21 09:10 PM',
        image: require('../assets/images/other_words_for_home.jpg'),
        description: 'Looking to add web dev or mobile dev experience to your resume or don\'t feel like you know enough to help? We have a project for that.'
    },
    {
        id: 6,
        type: 'CONCERT',
        title: 'The Weekend',
        startingTime: '2020/12/21 09:10 PM',
        image: require('../assets/images/other_words_for_home.jpg'),
        description: 'Looking to add web dev or mobile dev experience to your resume or don\'t feel like you know enough to help? We have a project for that.'
    }
]


export default {
    myProfile,
    categories,
    menu,
    dates,
    events
}