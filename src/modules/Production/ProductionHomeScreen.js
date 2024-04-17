import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ProductionHomeScreenStyles';

const ProductionHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>Production Home</Text>
        </View>
    );
};

export default ProductionHomeScreen;
