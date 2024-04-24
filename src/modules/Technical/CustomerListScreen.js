import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, DropdownListItem, Loader } from '../../components';
import UsersTypes from '../../redux/UsersRedux';
import styles from './styles/CustomerListScreenStyles';
import { UserType } from '../../services/Utils';


const CustomerListScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const { users, fetching } = useSelector(state => state.users)

    useEffect(() => {
        dispatch(UsersTypes.usersListRequest(UserType.client))
    }, [])

    const onBackPress = () => {
        navigation.goBack()
    }

    const onAddPress = () => {
        navigation.navigate('AddCustomerScreen')
    }

    const onDelete = (item) => {

    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} centerEnable={false} isTitle title={'Customers'} rightEnable onRightPress={onAddPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList
                        data={users}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DropdownListItem title={item?.company_name} />} />
                </View>
            </CustomBackground>
            {fetching && <Loader />}
        </View>
    );
};

export default CustomerListScreen;
