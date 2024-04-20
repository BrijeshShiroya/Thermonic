import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ProductionHomeScreenStyles';
import { CustomHeader, CustomBackground, CustomSearchbar } from '../../components';

const ProductionHomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomSearchbar />
                    <Text>Production Home2</Text>
                </View>
            </CustomBackground>
        </View>
    );
};

export default ProductionHomeScreen;
