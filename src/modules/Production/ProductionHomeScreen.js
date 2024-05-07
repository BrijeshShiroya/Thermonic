import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import styles from './styles/ProductionHomeScreenStyles';
import { CustomHeader, CustomBackground, CustomSearchbar, CustomerOrder, OptionsActionSheet } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import OrderTypes from '../../redux/OrderRedux';
import { SheetManager } from 'react-native-actions-sheet';
import API from '../../services/Api';
import { Strings } from '../../constants';

const api = API.order();

const ProductionHomeScreen = ({ navigation }) => {
    const [selected, setSelected] = useState()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(OrderTypes.workerOrderRequest({ worker_id: user.id }))
    }, [])


    const onRefresh = () => {
        dispatch(OrderTypes.workerOrderRequest({ worker_id: user.id }))
    }

    const assignToDispatcher = async (dispatch_id, order_id) => {
        setLoading(true);
        const payload = {
            dispatch_id,
            order_id,
            worker_id: user?.id,
        };
        try {
            const response = await api.assignOrderToDispatch(payload);
            setLoading(false);
            if (response?.data?.status && !response?.data?.error) {
                Alert.alert(Strings.thermonic, response?.data?.message);
                onRefresh()
            } else {
                Alert.alert(Strings.thermonic, "Error in assign order to worker, please try again after sometime.");
            }
        } catch (error) {
            setLoading(false);
        }
    }

    const openActionSheet = (item) => {
        SheetManager.show('dispatchOrderOption', { payload: item })
    }

    const onBackFromDispatch = (dispatcher, orderId) => {
        Alert.alert(Strings.thermonic, `Are you sure you want to assign order to ${dispatcher?.first_name} ${dispatcher?.last_name}?`, [
            { text: Strings.cancel, style: 'cancel' },
            {
                text: Strings.yes,
                style: 'destructive',
                onPress: () => {
                    assignToDispatcher(dispatcher?.id, orderId)
                }
            },
        ]);
    }

    const onOptionPress = (item) => {
        if (item == 'Dispatch Order') {
            navigation.navigate('DispatcherListScreen', { orderId: selected?.id, onBack: onBackFromDispatch })
            SheetManager.hide('dispatchOrderOption')
            setSelected()
        } else {
            SheetManager.hide('dispatchOrderOption')
            setSelected()
        }
    }

    const onBeforeShow = (data) => {
        setSelected(data)
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
                        renderItem={({ item }) => <CustomerOrder item={item} isOptional onOptionPress={() => openActionSheet(item)} />}
                        onRefresh={onRefresh}
                        refreshing={fetching}
                    />
                </View>
                <OptionsActionSheet id={'dispatchOrderOption'} options={['Dispatch Order', 'Cancel']} onBeforeShow={onBeforeShow} onOptionPress={(item) => onOptionPress(item)} />
            </CustomBackground>
        </View>
    );
};

export default ProductionHomeScreen;
