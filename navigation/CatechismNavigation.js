import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import CatechismList from '../screens/CatechismList';
import QuestionList from "../screens/QuestionList";
import {View, Text} from "react-native";
import QuestionDetail from "../screens/QuestionDetail";
import AnswerDetail from "../screens/AnswerDetail";


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {

    return (
        <MainStack.Navigator>
            <MainStack.Screen
                name="CatechismList"
                component={CatechismList}
                options={{headerShown: false}}
            />
            <MainStack.Screen
                name="QuestionList"
                component={QuestionList}
                options={{headerShown: false}}
            />
            <MainStack.Screen
                name="QuestionDetail"
                component={QuestionDetail}
                options={{headerShown: false, gestureEnabled: false}}
            />
            {/*<MainStack.Screen*/}
            {/*modal={true}*/}
            {/*name="AnswerDetail"*/}
            {/*component={AnswerDetail}*/}
            {/*options={{headerShown: false}}*/}
            {/*/>*/}
        </MainStack.Navigator>
    );
}

const RootStackScreen = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator mode="modal">
                <RootStack.Screen
                    name="Main"
                    options={{headerShown: false}}
                    component={MainStackScreen}
                />
                <RootStack.Screen
                    name="AnswerDetail"
                    component={AnswerDetail}
                    options={{headerShown: false}}

                />

            </RootStack.Navigator>
        </NavigationContainer>
    );
}

export default RootStackScreen;
