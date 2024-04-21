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
                    <DropdownListItem title={'Customer'} isRight />
                    <DropdownListItem title={'Manager'} isRight />
                    <DropdownListItem title={'Worker'} isRight />
                    <DropdownListItem title={'Dispatcher'} isRight />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ManageListScreen;
