import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/OrderListScreenStyles';
import { CustomBackground, CustomButton, CustomHeader } from '../../components';
import strings from '../../constants/Strings';

const OrderListScreen = ({ navigation, route }) => {

    const getType = () => {
        const type = route?.params?.type
        if (type == 1) {
            return "Accepted"
        } else if (type == 2) {
            return "Pending"
        } else if (type == 3) {
            return "In Progress"
        } else
            return "Dispatched"
    }

    const onBackPress = () => {
        navigation.goBack()
    }


    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable centerEnable={false} onLeftPress={onBackPress} isTitle title={getType()} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <Text>{getType()}</Text>
                </View>
            </CustomBackground>
        </View>
    );
};

export default OrderListScreen;
