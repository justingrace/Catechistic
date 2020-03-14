import React from 'react';
import {Platform, View, StyleSheet, Text, Dimensions} from 'react-native';


const Header = ({title, children, fontSize, showTitle, bold}) => {
    return (
        <View style={styles.headerContainer}>
            {children}
            {showTitle && <Text style={{
                ...styles.title,
                fontSize:fontSize,
                fontFamily: bold? 'lato-bold': 'lato'
            }}>
                {title}
            </Text>}
        </View>
    );

}

Header.defaultProps = {
    title: '',
    fontSize: 30,
    showTitle: true,
    bold: true
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        zIndex: 3,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        paddingBottom: 0
    }
});

export default Header;
