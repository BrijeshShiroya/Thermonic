import React, { useRef } from 'react';
import { View } from 'react-native';
import AppNavigation from '../navigation/AppNavigation';
import { ApplicationStyles, Colors } from '../theme';
import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

const RootContainer = () => {
    return (
        <View style={[ApplicationStyles.screen.mainContainer]}>
            <AppNavigation ref={navigationRef} />
        </View>
    );
};

export default RootContainer;
