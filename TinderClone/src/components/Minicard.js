import React from 'react';
import {
    View, Image
} from 'react-native';

const Minicard = ({ imageUri }) => {
    return (
        <View style={{ paddingLeft: 3, paddingRight: 3 }}>
            <Image
                source={imageUri}
                style={{
                    width: 90, height: 90,
                    borderRadius: 45,
                }} />

        </View>
    )
}

export default Minicard;