import React from 'react';
import {Platform, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const BackButton = ({navigation}) => {
    return (
        <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialCommunityIcons name="arrow-left" size={32} color="black"/>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        top: 19,
        left: 10,
        zIndex: 1
    },
});

export default BackButton;
