import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles/CustomerHomeScreenStyles';
import { CustomBackground, CustomHeader, CustomSearchbar, CustomerOrder } from '../../components';
import { CustomerOrderStatus } from '../../services/Utils';

const CustomerHomeScreen = ({ navigation }) => {

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

    const onAddOrderPress = () => {
        navigation.navigate('AddCustomerOrderScreen')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader rightEnable onRightPress={onAddOrderPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomSearchbar />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        style={styles.orderList}
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <CustomerOrder item={item} />}
                    />
                </View>
            </CustomBackground>
        </View>
    );
};

export default CustomerHomeScreen;
