import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/CustomerHomeScreenStyles';

const CustomerProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Customer Profile</Text>
        </View>
    );
};

export default CustomerProfileScreen;
