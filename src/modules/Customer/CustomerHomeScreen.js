import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/CustomerHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const CustomerHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>CustomerHome</Text>
            </CustomBackground>
        </View>
    );
};

export default CustomerHomeScreen;
