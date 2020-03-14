import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {CATECHISMS} from "../data/dummy";
import CatechismItem from "../components/CatechismItem";
import Header from "../components/Header";

const CatechismList = ({navigation}) => {
    const renderCatechismItem = itemData => {
        return <CatechismItem index={itemData.index} title={itemData.item.title}
                              onPress={() => navigation.navigate('QuestionList', {
                                  title: itemData.item.title,
                                  catechism: itemData.item.catechism,
                                  sectionHeaders: itemData.item.sectionHeaders,
                                  colors: itemData.item.colors,
                                  textColor: itemData.item.textColor,
                              })}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Catechisms"></Header>
            <FlatList numColumns={2} style={styles.flatlist} data={CATECHISMS} renderItem={renderCatechismItem}/>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    flatlist: {
        flex: 1
    }
});

export default CatechismList;
