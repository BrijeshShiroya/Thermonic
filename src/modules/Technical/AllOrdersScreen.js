import React from 'react';
import { View } from 'react-native';
import styles from './styles/AllOrderScreenStyles';
import { CustomBackground, CustomButton, CustomHeader } from '../../components';
import strings from '../../constants/Strings';
import { OrderStatus } from '../../services/Utils';

const AllOrderScreen = ({ navigation }) => {

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomButton style={styles.button} title={strings.accepted} onPress={() => navigation.navigate("OrderListScreen", { type: OrderStatus.accepted })} />
                    <CustomButton style={styles.button} title={strings.pending} onPress={() => navigation.navigate("OrderListScreen", { type: OrderStatus.pending })} />
                    <CustomButton style={styles.button} title={strings.inProgress} onPress={() => navigation.navigate("OrderListScreen", { type: OrderStatus.processing })} />
                    <CustomButton style={styles.button} title={strings.dispatched} onPress={() => navigation.navigate("OrderListScreen", { type: OrderStatus.dispatch })} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default AllOrderScreen;
