import React from 'react';
import { View } from 'react-native';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import styles from './styles/ManageListScreenStyles';

const ManageListScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <DropdownListItem title={'Category'} isRight />
                    <DropdownListItem title={'Sub Category'} isRight />
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
