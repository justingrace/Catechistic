import React from 'react';
import {Dimensions, View, StyleSheet, Text, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const QuestionItem = ({textColor, colors, item, onPress}) => {
    let {q, id} = item;
    let TouchableComponent = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) TouchableComponent = TouchableNativeFeedback;
    if (id % 2 === 0) {
        return (
            <View>
                <TouchableComponent onPress={onPress}>
                    <View style={{...styles.question, backgroundColor: 'white'}}>
                        <Text style={{...styles.questionText}}>Q{id}: {q}</Text>
                    </View>
                </TouchableComponent>
            </View>
        )
    }
    return (
        <View style={
            {
                shadowColor: "rgba(255,35,35,1)",
                shadowOffset: {
                    width: 2,
                    height: 5,
                },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 11
            }
        }>
            <TouchableComponent onPress={onPress}>
                <LinearGradient
                    colors={colors}
                    style={{...styles.question}}>
                    <View>
                        <Text style={{...styles.questionText, color: textColor!==undefined ? textColor:'white'}}>Q{id}: {q}</Text>
                    </View>

                </LinearGradient>
            </TouchableComponent>
        </View>

    );

}

const styles = StyleSheet.create({
    question: {
        width: Dimensions.get('window').width > 350? 350 : 300,
        padding: 15,
        justifyContent: 'center',
        margin: 10,
        borderRadius: 8,
        shadowColor: "rgba(255,35,35,1)",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 11,

    },
    questionText: {
        fontSize: 14,
        fontFamily: 'lato'
    },

});

export default QuestionItem;
