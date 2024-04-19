import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ProductionHomeScreenStyles';
import { CustomHeader, CustomBackground } from '../../components';

const ProductionHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>Production Home</Text>
            </CustomBackground>
        </View>
    );
};

export default ProductionHomeScreen;
