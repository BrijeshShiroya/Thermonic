import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/CustomerHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const CustomerProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>Customer Profile</Text>
            </CustomBackground>
        </View>
    );
};

export default CustomerProfileScreen;
