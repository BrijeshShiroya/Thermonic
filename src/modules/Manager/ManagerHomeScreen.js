import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import styles from './styles/ManagerHomeScreenStyles';
import { CustomBackground, CustomHeader, CustomSearchbar, CustomerOrder, OptionsActionSheet } from '../../components';
import OrderTypes from '../../redux/OrderRedux';
import { useDispatch, useSelector } from 'react-redux';
import { OrderStatus, UserType } from '../../services/Utils';
import { SheetManager } from 'react-native-actions-sheet';
import strings from '../../constants/Strings';
import API from '../../services/Api';
import { Strings } from '../../constants';

const api = API.order();

const ManagerHomeScreen = ({ navigation }) => {
    const [selected, setSelected] = useState()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state?.auth)
    const { order, fetching } = useSelector(state => state?.order)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: OrderStatus.accepted }, UserType.manager))
    }, [])

    const onRefresh = () => {
        dispatch(OrderTypes.orderRequest({ owner_id: user.id, status: OrderStatus.accepted }, UserType.manager))
    }


    const openActionSheet = (item) => {
        SheetManager.show('workerOrderOption', { payload: item })
    }

    const assignToWorker = async (worker_id, order_id) => {
        setLoading(true);
        const payload = {
            worker_id,
            order_id,
            manager_id: user?.id,
        };
        try {
            const response = await api.assignOrderToWorker(payload);
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

    const onBackFromWorker = (worker, orderId) => {
        Alert.alert(strings.thermonic, `Are you sure you want to assign order to ${worker?.first_name} ${worker?.last_name}?`, [
            { text: strings.cancel, style: 'cancel' },
            {
                text: strings.yes,
                style: 'destructive',
                onPress: () => {
                    assignToWorker(worker?.id, orderId)
                }
            },
        ]);
    }

    const onOptionPress = (item) => {
        if (item == 'Assign Order') {
            navigation.navigate('WorkerListScreen', { orderId: selected?.id, onBack: onBackFromWorker })
            SheetManager.hide('workerOrderOption')
            setSelected()
        } else {
            SheetManager.hide('workerOrderOption')
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
                <OptionsActionSheet id={'workerOrderOption'} options={['Assign Order', 'Cancel']} onBeforeShow={onBeforeShow} onOptionPress={(item) => onOptionPress(item)} />
            </CustomBackground>
        </View>
    );
};

export default ManagerHomeScreen;
