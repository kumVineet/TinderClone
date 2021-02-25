import React from 'react';
import {
    View
} from 'react-native';

import CardStack, { Card } from 'react-native-card-stack-swiper';


import CardItem from './CardItem';
import { HomeScreenPics } from '../assets/data/Pics';


const Swipes = () => {

    return (


        <View>
            <CardStack
                loop={true}
                verticalSwipe={false}
                renderNoMoreCards={() => null}
                ref={swiper => (this.swiper = swiper)}
            >
                {HomeScreenPics.map((item, index) => (
                    <Card key={index}>
                        <CardItem
                            Details={item}
                            actions
                            onPressLeft={() => this.swiper.swipeLeft()}
                            onPressRight={() => this.swiper.swipeRight()}
                        />
                    </Card>
                ))}
            </CardStack>
        </View>

    )
}


export default Swipes;