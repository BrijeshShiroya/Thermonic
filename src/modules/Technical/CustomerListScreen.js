import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, DropdownListItem, Loader, UserInfo } from '../../components';
import UsersTypes from '../../redux/UsersRedux';
import styles from './styles/CustomerListScreenStyles';
import { UserType } from '../../services/Utils';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';


const CustomerListScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState()

    const type = route?.params?.type

    const getTitle = () => {
        if (type == UserType.client) {
            return "Customers"
        } else if (type == UserType.manager) {
            return "Managers"
        } else if (type == UserType.worker) {
            return "Workers"
        } else if (type == UserType.dispatch) {
            return "Dispatchers"
        } else {
            return "Owners"
        }
    }

    const { users, fetching } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(UsersTypes.usersListRequest(type))
    }, [type])

    const onBackPress = () => {
        navigation.goBack()
    }

    const onAddPress = () => {
        navigation.navigate('AddCustomerScreen', { type })
    }

    const onDelete = (item) => {
        setSelectedUser(item)
        SheetManager.show('user-info')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} centerEnable={false} isTitle title={getTitle()} rightEnable onRightPress={onAddPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList
                        data={users}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DropdownListItem title={item?.company_name} onPress={() => onDelete(item)} />} />
                </View>
            </CustomBackground>
            <ActionSheet id={'user-info'}>
                <View>
                    <UserInfo info={selectedUser} />
                </View>
            </ActionSheet>
            {fetching && <Loader />}
        </View>
    );
};

export default CustomerListScreen;
