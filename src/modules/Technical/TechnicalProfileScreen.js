import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/TechnicalHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const TechnicalProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>Technical Profile</Text>
            </CustomBackground>
        </View>
    );
};

export default TechnicalProfileScreen;
