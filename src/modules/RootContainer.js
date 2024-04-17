import React, { useRef } from 'react';
import { View } from 'react-native';
import AppNavigation from '../navigation/AppNavigation';

import { ApplicationStyles, Colors } from '../theme';

const RootContainer = () => {
    const navRef = useRef();

    return (
        <View style={[ApplicationStyles.screen.mainContainer]}>
            <AppNavigation ref={navRef} />
        </View>
    );
};

export default RootContainer;
