import React from 'react';
import { View } from 'react-native';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import styles from './styles/ManageListScreenStyles';

const ManageListScreen = ({ navigation }) => {

    const navigateToScreen = (selectedItem) => {
        navigation.navigate('ManageListItemsScreen', { manageItem: selectedItem })
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <DropdownListItem title={'Category'} isRight onPress={() => navigateToScreen('Category')} />
                    <DropdownListItem title={'Sub Category'} isRight onPress={() => navigateToScreen('Sub Category')} />
                    <DropdownListItem title={'Customer'} isRight onPress={() => navigateToScreen('Customer')} />
                    <DropdownListItem title={'Manager'} isRight onPress={() => navigateToScreen('Manager')} />
                    <DropdownListItem title={'Worker'} isRight onPress={() => navigateToScreen('Worker')} />
                    <DropdownListItem title={'Dispatcher'} isRight onPress={() => navigateToScreen('Dispatcher')} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ManageListScreen;
