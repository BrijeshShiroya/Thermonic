import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ManagerHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const ManagerProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>Manager Profile</Text>
            </CustomBackground>
        </View>
    );
};

export default ManagerProfileScreen;
