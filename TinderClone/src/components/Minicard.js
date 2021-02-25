import React from 'react';
import {
    View, TouchableOpacity, Image
} from 'react-native';

const Minicard = ({ imageUri }) => {
    return (
        <View style={{ paddingLeft: 3, paddingRight: 3 }}>
            <Image
                // source={{ uri: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                source={imageUri}
                style={{
                    width: 90, height: 90,
                    borderRadius: 45,
                }} />

        </View>
    )
}

export default Minicard;