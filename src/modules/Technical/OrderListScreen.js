import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles/OrderListScreenStyles';
import { CustomBackground, CustomButton, CustomHeader, CustomerOrder, Loader } from '../../components';
import strings from '../../constants/Strings';
import { CustomerOrderStatus, OrderStatus, UserType } from '../../services/Utils';
import { useDispatch, useSelector } from 'react-redux';
import OrderTypes from '../../redux/OrderRedux';

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

const OrderListScreen = ({ navigation, route }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)

    useEffect(() => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: route?.params?.type }, UserType.owner))
    }, [])

    const getType = () => {
        const type = route?.params?.type
        if (type == OrderStatus.accepted) {
            return "Accepted"
        } else if (type == OrderStatus.pending) {
            return "Pending"
        } else if (type == OrderStatus.processing) {
            return "In Progress"
        } else if (type == OrderStatus.dispatch) {
            return "Dispatch"
        } else
            return "Completed"
    }

    const onRefresh = () => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: route?.params?.type }, UserType.owner))
    }

    const onBackPress = () => {
        navigation.goBack()
    }


    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable centerEnable={false} onLeftPress={onBackPress} isTitle title={getType()} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList
                        contentContainerStyle={styles.orderList}
                        showsVerticalScrollIndicator={false}
                        data={order}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <CustomerOrder item={item} />}
                        onRefresh={onRefresh}
                        refreshing={fetching}
                    />
                </View>
            </CustomBackground>
        </View>
    );
};

export default OrderListScreen;
