import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles/CustomerHomeScreenStyles';
import { CustomBackground, CustomHeader, CustomSearchbar, CustomerOrder, Loader } from '../../components';
import { CustomerOrderStatus, OrderStatus, UserType } from '../../services/Utils';
import { useDispatch, useSelector } from 'react-redux';
import OrderTypes from '../../redux/OrderRedux';


const CustomerHomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)

    useEffect(() => {
        dispatch(OrderTypes.orderRequest({ client_id: user.id, status: OrderStatus.pending }, UserType.client))
    }, [])

    const onAddOrderPress = () => {
        navigation.navigate('AddCustomerOrderScreen')
    }

    const onRefresh = () => {
        dispatch(OrderTypes.orderRequest({ client_id: user.id, status: OrderStatus.pending }, UserType.client))
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader rightEnable onRightPress={onAddOrderPress} />
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

export default CustomerHomeScreen;
