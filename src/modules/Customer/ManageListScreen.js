import React from 'react';
import { View } from 'react-native';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import styles from './styles/ManageListScreenStyles';

const ManageListScreen = ({ navigation }) => {

    const navigateToScreen = (screenName, params = {}) => {
        navigation.navigate(screenName, params)
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <DropdownListItem title={'Category'} isRight onPress={() => navigateToScreen('AddCategoryScreen', { categoryType: 1 })} />
                    <DropdownListItem title={'Sub Category'} isRight onPress={() => navigateToScreen('AddCategoryScreen', { categoryType: 2 })} />
                    <DropdownListItem title={'Customer'} isRight onPress={() => navigateToScreen('AddCustomerScreen')} />
                    <DropdownListItem title={'Manager'} isRight onPress={() => navigateToScreen('AddManagerScreen')} />
                    <DropdownListItem title={'Worker'} isRight onPress={() => navigateToScreen('AddWorkerScreen')} />
                    <DropdownListItem title={'Dispatcher'} isRight onPress={() => navigateToScreen('AddDispatcherScreen')} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ManageListScreen;
