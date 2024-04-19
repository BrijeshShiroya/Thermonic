import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ProductionHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const ProductionProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <Text>Production Profile</Text>
            </CustomBackground>
        </View>
    );
};

export default ProductionProfileScreen;
