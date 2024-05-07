import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles/ProductionHomeScreenStyles';
import { CustomHeader, CustomBackground, CustomSearchbar, CustomerOrder } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import OrderTypes from '../../redux/OrderRedux';

const ProductionHomeScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)

    useEffect(() => {
        dispatch(OrderTypes.workerOrderRequest({ worker_id: user.id }))
    }, [])


    const onRefresh = () => {
        dispatch(OrderTypes.workerOrderRequest({ worker_id: user.id }))
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

export default ProductionHomeScreen;
