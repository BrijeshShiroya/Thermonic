import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ManagerHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const ManagerHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>Manager Home</Text>
            </CustomBackground>
        </View>
    );
};

export default ManagerHomeScreen;
