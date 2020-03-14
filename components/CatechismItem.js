import React from 'react';
import {
    Image,
    Platform,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    StyleSheet,
    Dimensions
} from "react-native";

const CatechismItem = ({title, onPress, index}) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) TouchableComponent = TouchableNativeFeedback;

    const patterns = [require('../assets/stripes/blue.png'), require('../assets/stripes/orange.png'), require('../assets/stripes/red.png'), require('../assets/stripes/cyan.png'), require('../assets/stripes/forestGreen.png')]
    return (
        <View style={{...styles.outerContainer}}>
            <TouchableOpacity style={{width: '100%', height: '100%'}} onPress={onPress}>
                <View style={{position: 'relative'}}>
                    <Image source={patterns[index]} style={styles.imgBackground} />
                    <View style={styles.catechismContainer}>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const heightPercentage = 0.55;
const widthPercentage = 0.4;

const styles = StyleSheet.create({
    outerContainer: {
        height: Dimensions.get('window').width * heightPercentage,
        width: Dimensions.get('window').width * widthPercentage,
        margin: 10,
        marginVertical: 10,
        borderRadius: 20,
        overflow: 'hidden',

    },
    catechismContainer: {
        flex: 1,
        height: Dimensions.get('window').width * heightPercentage,
        width: Dimensions.get('window').width * widthPercentage,
        position: 'absolute',
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'flex-end',
        padding: 15,

    },
    title: {
        fontSize: 16,
        width: '100%',
        color: 'white',
        fontFamily: 'lato-bold'
    },
    imgBackground: {
        height: Dimensions.get('window').width * heightPercentage,
        width: Dimensions.get('window').width * widthPercentage,
        position: 'absolute',
    }

})

export default CatechismItem;
