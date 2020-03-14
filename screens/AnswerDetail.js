
import React, {useEffect, useState} from 'react';
import {Dimensions,Button, SafeAreaView, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import DoubleTap from "../components/DoubleTap";
import Header from "../components/Header";

const axios = require('axios').default;

const AUTH_TOKEN = 'Token 6095accecd28b3035f25a4000aaae578589f1c3c';

const AnswerDetail = ({navigation, route}) => {
    let {id, a, r, sectionHeaders, catechismTitle} = route.params;
    const [verseData, setVerseData] = useState(null);


    const backToQuestion = () => {
        navigation.goBack();
    }

    const [showScrollIcon, setShowScrollIcon] = useState(false);


    useEffect(() => {
        const source = axios.CancelToken.source();
        const getVerseData = async (versesArr) => {
            const requests = versesArr.map(async verses => {
                return Promise.all(verses.map(async verse => {

                    try {
                        // console.log("i'm fetching now", verse)
                        const {data} = await axios.get(`https://api.esv.org/v3/passage/text/?q=${verse}&indent-paragraphs=0&indent-poetry=False&include-headings=False&include-verse-numbers=False&include-footnotes=False&include-short-copyright=False&include-passage-references=False`,
                            {headers: {'Authorization': AUTH_TOKEN}, cancelToken: source.token})
                        // console.log('i fetched', verse)
                        return {"ref": data.canonical, "passage": data.passages}
                    } catch (error) {
                        if (axios.isCancel(error)) {
                            // console.log('cancelled axios request')
                            //cancelled
                        } else {
                            throw error;
                        }
                    }

                }))

            })
            return Promise.all(requests)

        }

        let verses = [];
        if (r !== undefined) {
            let keys = Object.keys(r);
            keys.map(key => {
                verses.push(r[key])
            })
        }

        getVerseData(verses)
            .then(data => {
                setVerseData(data)
            })
            .catch(err => {
                console.log("fetching data error",err)
            })


        return () => {
            source.cancel();
        }; //cleanup function
    }, [r])


    const refs = () => {
        if (r !== undefined) {
            if (verseData !== null) {
                const finalList = [];
                for (let i = 0; i < verseData.length; i++) {
                    let verses = verseData[i];
                    finalList.push(<Text key={`section-${i}`}>[{sectionHeaders[i]}]</Text>);
                    finalList.push(verses.map((verseD, index) => {
                        return (
                            <View key={index + verseD.ref} style={styles.verse}>
                                <Text style={styles.verseBody}>{verseD.passage.join("").trim()}</Text>
                                <Text style={styles.verseRef}>{verseD.ref}</Text>
                            </View>)
                    }))
                }
                return finalList;
            }
        }
    }

    const handleScroll = (e) => {
        if (e.nativeEvent.contentOffset.y > e.nativeEvent.contentSize.height - e.nativeEvent.layoutMeasurement.height - 100) {
            setShowScrollIcon(false)
        } else {
            if (!showScrollIcon) {
                setShowScrollIcon(true)
            }
        }

    }

    return (
        <SafeAreaView style={styles.headerContainer}>
            <Header title={catechismTitle} fontSize={18} bold={false}>
            </Header>
            <ScrollView style={styles.scrollview} onScroll={handleScroll}>
                <DoubleTap onDoubleTap={backToQuestion}>
                    <View style={styles.textContainer}>
                        <Text style={styles.questionNo}>Q{id}</Text>
                        <View>
                            <Text style={styles.answerText}>{a}</Text>

                            <View onLayout={(event) => {
                                const {height} = event.nativeEvent.layout;
                                if (height > 0.9 * Dimensions.get('window').height) {
                                    setShowScrollIcon(true);
                                }
                            }}>
                                {verseData !== null ? refs() :
                                    <View style={styles.loadingSpinnerContainer}>
                                        <Image style={styles.loadingSpinner}
                                               source={require('../assets/loadingSpinner.gif')}/>
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </DoubleTap>

            </ScrollView>
            {showScrollIcon &&
            <Image source={require('../assets/mouse.png')} style={styles.scrollIcon} resizeMode="contain"/>
            }
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    scrollview: {
        flex: 1,
        paddingHorizontal: '3%',
        paddingBottom: 5,
    },
    questionNo: {
        fontSize: 70,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'lato-bold'
    },
    answerText: {
        fontSize: 24,
        textAlign: 'center',
        margin: 0,
        marginBottom: 30,
        fontFamily: 'lato'

    },

    loadingSpinnerContainer: {
        backgroundColor: 'white',
        height: 100,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },

    loadingSpinner: {
        height: 100,
        width: 100
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: '3%'
    },
    iconHolder: {
        position: 'absolute',
        bottom: 20,
        height: 50,
        width: 50,

    },

    scrollIcon: {
        position: 'absolute',
        bottom: 20,
        height: 60,
        width: 60,
    },


    verse: {
        padding: 20,
        margin: 10,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.68,
        elevation: 5,
    },
    verseBody: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'lato'
    },
    verseRef: {
        fontSize: 14,
        textAlign: 'right',
        fontFamily: 'lato'
    },


});

export default AnswerDetail;
