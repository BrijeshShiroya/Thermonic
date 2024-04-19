import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/TechnicalHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const TechnicalHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>Technical Home</Text>
            </CustomBackground>
        </View>
    );
};

export default TechnicalHomeScreen;
