import React from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles/PendingOrderListScreenStyles';
import { CustomBackground, CustomButton, CustomHeader, CustomerOrder } from '../../components';
import strings from '../../constants/Strings';
import { CustomerOrderStatus } from '../../services/Utils';

const DATA = [
    {
        id: 'TI3042406',
        productName: 'PT100 Head 6mmx200mm 1/2 BSP fix',
        qty: 6,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042408',
        productName: 'Thread in PT100 6mmx100mm 1/2 NPT fix',
        qty: 20,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042410',
        productName: 'Thread in PT100 6mmx100mm 1/2 NPT fix',
        qty: 40,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042411',
        productName: 'PT100 Head 6mmx200mm 1/2 BSP fix',
        qty: 6,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042412',
        productName: 'Thread in PT100 6mmx100mm 1/2 NPT fix',
        qty: 20,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042413',
        productName: 'Thread in PT100 6mmx100mm 1/2 NPT fix',
        qty: 40,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042414',
        productName: 'PT100 Head 6mmx200mm 1/2 BSP fix',
        qty: 6,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042415',
        productName: 'Thread in PT100 6mmx100mm 1/2 NPT fix',
        qty: 20,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
    {
        id: 'TI3042416',
        productName: 'Thread in PT100 6mmx100mm 1/2 NPT fix',
        qty: 40,
        status: CustomerOrderStatus.accepted,
        other: 'Please complete my order on urgent basis'
    },
];

const PendingOrderListScreen = ({ navigation, route }) => {

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
            <CustomHeader leftEnable centerEnable={false} onLeftPress={onBackPress} isTitle title={strings.pendingOrders} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList
                        contentContainerStyle={styles.orderList}
                        showsVerticalScrollIndicator={false}
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <CustomerOrder item={item} />}
                    />
                </View>
            </CustomBackground>
        </View>
    );
};

export default PendingOrderListScreen;
