import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles/ManagerHomeScreenStyles';
import { CustomBackground, CustomHeader, CustomSearchbar, CustomerOrder } from '../../components';
import OrderTypes from '../../redux/OrderRedux';
import { useDispatch, useSelector } from 'react-redux';
import { OrderStatus, UserType } from '../../services/Utils';

const ManagerHomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)

    useEffect(() => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: OrderStatus.accepted }, UserType.manager))
    }, [])

    const onRefresh = () => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: OrderStatus.accepted }, UserType.manager))
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomSearchbar />
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.orderList}
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

export default ManagerHomeScreen;
