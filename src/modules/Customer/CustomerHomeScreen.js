import React from 'react';
import { FlatList, Text, View } from 'react-native';
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
    ];

    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomSearchbar />
                    <FlatList
                        style={styles.orderList}
                        data={DATA}
                        renderItem={({ item }) => <CustomerOrder item={item} />}
                    />
                </View>
            </CustomBackground>
        </View>
    );
};

export default CustomerHomeScreen;
