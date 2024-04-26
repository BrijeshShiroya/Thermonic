import React from 'react';
import { View } from 'react-native';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import styles from './styles/ManageListScreenStyles';
import { UserType } from '../../services/Utils'


const ManageListScreen = ({ navigation }) => {

    const navigateToScreen = (screenName, params) => {
        navigation.navigate(screenName, params)
    }


    const onCategorySelect = (selectedItem) => {
        navigation.navigate('CategoryListScreen', { manageItem: selectedItem })
    }


    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <DropdownListItem title={'Category'} isRight onPress={() => onCategorySelect('Category')} />
                    <DropdownListItem title={'Sub Category'} isRight onPress={() => onCategorySelect('Sub Category')} />
                    <DropdownListItem title={'Customer'} isRight onPress={() => navigateToScreen('CustomerListScreen', { type: UserType.client })} />
                    <DropdownListItem title={'Manager'} isRight onPress={() => navigateToScreen('CustomerListScreen', { type: UserType.manager })} />
                    <DropdownListItem title={'Worker'} isRight onPress={() => navigateToScreen('CustomerListScreen', { type: UserType.worker })} />
                    <DropdownListItem title={'Dispatcher'} isRight onPress={() => navigateToScreen('CustomerListScreen', { type: UserType.dispatch })} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ManageListScreen;
