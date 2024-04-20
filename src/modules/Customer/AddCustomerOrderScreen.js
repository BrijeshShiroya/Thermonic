import React from 'react';
import { Text, View } from 'react-native';
import { CustomBackground, CustomHeader } from '../../components';
import styles from './styles/AddCustomerOrderScreenStyles';

const AddCustomerOrderScreen = ({ navigation }) => {

    const onBackPress = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <Text>Add Customer Order Screen</Text>
                </View>
            </CustomBackground>
        </View>
    );
};

export default AddCustomerOrderScreen;
