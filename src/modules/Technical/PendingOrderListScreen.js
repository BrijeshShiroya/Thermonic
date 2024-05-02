import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, CustomerOrder, Loader, OptionsActionSheet } from '../../components';
import strings from '../../constants/Strings';
import OrderTypes from '../../redux/OrderRedux';
import { OrderStatus, UserType } from '../../services/Utils';
import styles from './styles/PendingOrderListScreenStyles';
import { SheetManager } from 'react-native-actions-sheet';

const PendingOrderListScreen = ({ navigation, route }) => {
    const [selected, setSelected] = useState()
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

    const openActionSheet = (item) => {
        SheetManager.show('orderOption', { payload: item })
    }

    const onOptionPress = (item) => {
        if (item == 'Accept Order') {
            alert(JSON.stringify(selected))
            SheetManager.hide('orderOption')
            setSelected()
        } else {
            SheetManager.hide('orderOption')
            setSelected()
        }
    }

    const onBeforeShow = (data) => {
        setSelected(data)
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
                        renderItem={({ item }) => <CustomerOrder item={item} isOptional onOptionPress={() => openActionSheet(item)} />}
                        onRefresh={onRefresh}
                        refreshing={fetching}
                    />
                </View>
                <OptionsActionSheet id={'orderOption'} options={['Accept Order', 'Cancel']} onBeforeShow={onBeforeShow} onOptionPress={(item) => onOptionPress(item)} />
            </CustomBackground>
            {fetching && <Loader />}
        </View>
    );
};

export default PendingOrderListScreen;
