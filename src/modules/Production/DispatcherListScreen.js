import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, DropdownListItem, Loader, UserInfo } from '../../components';
import UsersTypes from '../../redux/UsersRedux';
import styles from '../Technical/styles/CustomerListScreenStyles';
import { UserType } from '../../services/Utils';


const DispatcherListScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState()

    const { onBack, orderId } = route?.params

    const { users, fetching } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(UsersTypes.usersListRequest(UserType.dispatch))
    }, [])

    const onBackPress = () => {
        navigation.goBack()
    }

    const onSelect = (item) => {
        setSelectedUser(item)
        onBack(item, orderId)
        navigation.goBack()
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} centerEnable={false} isTitle title={'Select Dispatcher'} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList
                        data={users}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DropdownListItem title={`${item?.first_name} ${item?.last_name}`} onPress={() => onSelect(item)} />} />
                </View>
            </CustomBackground>
            {fetching && <Loader />}
        </View>
    );
};

export default DispatcherListScreen;
