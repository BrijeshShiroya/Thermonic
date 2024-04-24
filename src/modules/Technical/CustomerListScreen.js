import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import CategoryTypes from '../../redux/CategoryRedux';
import styles from './styles/CustomerListScreenStyles';


const CustomerListScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();

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
                    <FlatList data={[]} showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DropdownListItem title={item?.sub_category_name} onPress={() => onDelete(item)} />} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default CustomerListScreen;
