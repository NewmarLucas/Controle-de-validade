import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Detail from './pages/Detail';
import Create from './pages/Create';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown:false }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Detail" component={Detail} />
                <AppStack.Screen name="Create" component={Create} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}