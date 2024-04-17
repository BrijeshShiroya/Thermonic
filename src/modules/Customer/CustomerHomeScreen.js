import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/CustomerHomeScreenStyles';

const CustomerHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Customer Home</Text>
        </View>
    );
};

export default CustomerHomeScreen;
