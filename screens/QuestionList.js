import React from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
} from 'react-native';
import QuestionItem from "../components/QuestionItem";
import Header from "../components/Header";
import BackButton from "../components/BackButton";


const QuestionList = ({navigation, route}) => {

    const {catechism, sectionHeaders, title, colors, textColor} = route.params;
    const renderQuestionItem = itemData => {
        return <QuestionItem item={itemData.item} colors={colors} textColor={textColor} onPress={() => navigation.navigate('QuestionDetail', {
            catechismTitle:title,
            item: itemData.item,
            indexInList: itemData.index,
            catechism: catechism,
            sectionHeaders: sectionHeaders,
            total: catechism.length,
        })}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={title} fontSize={title.length > 10 ? 20 : 32}>
                <BackButton navigation={navigation}/>
            </Header>
            <FlatList style={styles.flatlist} data={catechism} renderItem={renderQuestionItem}/>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1
    },
    flatlist: {
        flex: 1
    }
});

export default QuestionList;
