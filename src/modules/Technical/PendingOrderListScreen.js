import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, CustomerOrder, Loader } from '../../components';
import strings from '../../constants/Strings';
import OrderTypes from '../../redux/OrderRedux';
import { OrderStatus, UserType } from '../../services/Utils';
import styles from './styles/PendingOrderListScreenStyles';

const PendingOrderListScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)

    useEffect(() => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: OrderStatus.pending }, UserType.owner))
    }, [])

    const onRefresh = () => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: OrderStatus.pending }, UserType.owner))
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

export default PendingOrderListScreen;
