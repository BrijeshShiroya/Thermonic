import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles/CustomerHomeScreenStyles';
import { CustomBackground, CustomHeader, CustomSearchbar, CustomerOrder, Loader } from '../../components';
import { CustomerOrderStatus, OrderStatus } from '../../services/Utils';
import { useDispatch, useSelector } from 'react-redux';
import OrderTypes from '../../redux/OrderRedux';


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

    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)

    useEffect(() => {
        dispatch(OrderTypes.orderRequest(user.id, OrderStatus.pending))
    }, [])

    const onAddOrderPress = () => {
        navigation.navigate('AddCustomerOrderScreen')
    }

    const onRefresh = () => {
        dispatch(OrderTypes.orderRequest(user.id, OrderStatus.pending))
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
                        data={order}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <CustomerOrder item={item} />}
                        onRefresh={onRefresh}
                        refreshing={fetching}
                    />
                </View>
            </CustomBackground>
            {fetching && <Loader />}
        </View>
    );
};

export default CustomerHomeScreen;
