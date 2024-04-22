import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/TechnicalHomeScreenStyles';
import { CustomBackground, CustomButton, CustomHeader } from '../../components';
import strings from '../../constants/Strings';

const TechnicalHomeScreen = ({ navigation }) => {

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName)
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomButton style={styles.button} title={strings.acceptOrder} onPress={() => navigateToScreen("AllOrdersScreen")} />
                    <CustomButton title={strings.viewAllOrder} onPress={() => navigateToScreen("AllOrdersScreen")} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default TechnicalHomeScreen;
