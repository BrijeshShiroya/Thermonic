import React from 'react';
import { View } from 'react-native';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import styles from './styles/ManageListScreenStyles';

const ManageListScreen = ({ navigation }) => {

    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName)
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
                    <DropdownListItem title={'Customer'} isRight onPress={() => navigateToScreen('CustomerListScreen')} />
                    <DropdownListItem title={'Manager'} isRight onPress={() => navigateToScreen('Manager')} />
                    <DropdownListItem title={'Worker'} isRight onPress={() => navigateToScreen('Worker')} />
                    <DropdownListItem title={'Dispatcher'} isRight onPress={() => navigateToScreen('Dispatcher')} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ManageListScreen;
