import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Dimensions,
    Text,
    TouchableOpacity,
    Platform,
    TouchableNativeFeedback
} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
import DoubleTap from "../components/DoubleTap";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const QuestionDetail = ({navigation, route}) => {
    let {id, question, answer, reference} = route.params.item;
    const {catechism, sectionHeaders, catechismTitle} = route.params;
    const currIndex = route.params.indexInList;
    const total = route.params.total;

    let prevIndex = (currIndex == 0) ? (total - 1) : currIndex - 1;
    let nextIndex = (currIndex + 1) % total;
    const prevItem = catechism[prevIndex];
    const nextItem = catechism[nextIndex];

    let TouchableComponent = TouchableOpacity
    if (Platform.OS === 'android' && Platform.Version >= 21) TouchableComponent = TouchableNativeFeedback;

    const showAnswer = () => {
        navigation.navigate('AnswerDetail', {id: id, answer: answer, reference: reference, sectionHeaders, catechismTitle})
    }

    const goToPrev = () => navigation.navigate('QuestionDetail', {
        item: prevItem,
        indexInList: prevIndex,
        total: total,
        catechism,
        sectionHeaders,
        catechismTitle
    });
    const goToNext = () => navigation.navigate('QuestionDetail', {
        item: nextItem,
        indexInList: nextIndex,
        total: total,
        catechism,
        sectionHeaders,
        catechismTitle
    });



    return (
        <SafeAreaView style={styles.headerContainer}>
            <Header title={catechismTitle} fontSize={18} bold={false}>
                <BackButton navigation={navigation}/>
            </Header>
            <View style={styles.leftIcon}>
                <TouchableOpacity onPress={goToPrev}>
                    <MaterialCommunityIcons name="chevron-left" size={50} color="black"/>
                </TouchableOpacity>
            </View>
            <View style={styles.rightIcon}>
                <TouchableOpacity onPress={goToNext}>
                    <MaterialCommunityIcons name="chevron-right" size={50} color="black"/>
                </TouchableOpacity>
            </View>

            <GestureRecognizer
                style={{flex: 1}}
                onSwipeRight={goToPrev}
                onSwipeLeft={goToNext}>
                <DoubleTap onDoubleTap={showAnswer}>
                    <View style={styles.innerContainer}>
                        <View>
                            <Text style={styles.questionNo}>Q{id}</Text>
                            <Text
                                style={styles.questionText}>{question}</Text>
                        </View>
                        {/*<TouchableComponent style={styles.testButton}>*/}
                        {/*<Text style={styles.testButtonText}>TEST</Text>*/}
                        {/*</TouchableComponent>*/}
                        <View style={styles.bottomBar}>
                            <MaterialCommunityIcons name="gesture-double-tap" size={50} style={styles.icon}/>
                            <Text style={styles.bottomBarText}>Double tap to/from answer</Text>
                        </View>
                    </View>
                </DoubleTap>
            </GestureRecognizer>
        </SafeAreaView>

    );

}


const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        backgroundColor: 'white'
    },

    leftIcon: {
        position: 'absolute',
        zIndex: 2,
        left: 0,
        top: Dimensions.get('window').height * 0.5 - 25
    },
    rightIcon: {
        position: 'absolute',
        zIndex: 2,
        right: 0,
        top: Dimensions.get('window').height * 0.5 - 25
    },
    questionNo: {
        fontSize: 70,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'lato-bold'
    },
    questionText: {
        fontSize: 30,
        textAlign: 'center',
    },

    innerContainer: {
        justifyContent: 'space-between',
        paddingHorizontal: '15%',
        paddingBottom: 20,
        flex: 1
    },

    bottomBar: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    testButton: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 35,
    },

    testButtonText: {
        fontSize: 30
    },

    bottomBarText: {
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'lato'
    }

});

export default QuestionDetail;
