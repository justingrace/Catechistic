import React from 'react';
import {View, TouchableWithoutFeedback} from "react-native";

const DoubleTap = ({children, onDoubleTap, delay}) => {

    let lastTap = null;
    const handleDoubleTap = () => {
        const now = Date.now();
        if (lastTap && (now - lastTap) < delay) {
            onDoubleTap();
        } else {
            lastTap = now;
        }
    }

    return (
        <View style={{flex:1}}>
            <TouchableWithoutFeedback onPress={handleDoubleTap}>
                {children}
            </TouchableWithoutFeedback>
        </View>
    );
}

DoubleTap.defaultProps = {
    delay: 300,
    onDoubleTap: () => null,
}

export default DoubleTap;
