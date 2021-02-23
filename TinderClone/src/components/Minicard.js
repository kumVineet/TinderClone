import React from 'react';
import {
    View, TouchableOpacity, Image
} from 'react-native';

const Minicard = () => {
    return (
        <View>
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                style={{
                    width: 90, height: 90,
                    borderRadius: 45
                }} />

        </View>
    )
}

export default Minicard;