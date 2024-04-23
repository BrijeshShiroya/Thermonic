import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import styles from './styles/ManageListItemsScreenStyles';
import { useDispatch, useSelector } from 'react-redux';
import CategoryTypes, { CategorySelectors } from '../../redux/CategoryRedux';


const getData = (title) => {
    if (title == "Category") {
        return [
            { title: 'Category 1' }, { title: 'Category 2' }, { title: 'Category 3' }, { title: 'Category 4' }, { title: 'Category 5' }
        ]
    } else if (title == "Sub Category") {
        return [
            { title: 'Sub Category 1' }, { title: 'Sub Category 2' }, { title: 'Sub Category 3' }, { title: 'Sub Category 4' }, { title: 'Sub Category 5' }
        ]
    } else if (title == "Customer") {
        return [
            { title: 'Customer 1' }, { title: 'Customer 2' }, { title: 'Customer 3' }, { title: 'Customer 4' }, { title: 'Customer 5' }
        ]
    } else if (title == "Manager") {
        return [
            { title: 'Manager 1' }, { title: 'Manager 2' }, { title: 'Manager 3' }, { title: 'Manager 4' }, { title: 'Manager 5' }
        ]
    } else if (title == "Worker") {
        return [
            { title: 'Worker 1' }, { title: 'Worker 2' }, { title: 'Worker 3' }, { title: 'Worker 4' }, { title: 'Worker 5' }
        ]
    } else {
        return [
            { title: 'Dispatcher 1' }, { title: 'Dispatcher 2' }, { title: 'Dispatcher 3' }, { title: 'Dispatcher 4' }, { title: 'Dispatcher 5' }
        ]
    }
}

const ManageListItemsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const title = route?.params?.manageItem;
    useEffect(() => {
        title == "Category" ? dispatch(CategoryTypes.categoryListRequest()) : dispatch(CategoryTypes.subCategoryListRequest())
    }, [title])

    const { category, subCategory } = useSelector(state => state.category)


    const onBackPress = () => {
        navigation.goBack()
    }

    const onAddPress = () => {
        if (title == "Category") {
            navigation.navigate('AddCategoryScreen', { categoryType: 1 })
        } else if (title == "Sub Category") {
            navigation.navigate('AddCategoryScreen', { categoryType: 2 })
        } else if (title == "Customer") {
            navigation.navigate('AddCustomerScreen')
        } else if (title == "Manager") {
            navigation.navigate('AddManagerScreen')
        } else if (title == "Worker") {
            navigation.navigate('AddWorkerScreen')
        } else {
            navigation.navigate('AddDispatcherScreen')
        }
    }

    const Data = getData(title)

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} rightEnable onRightPress={onAddPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList data={title == 'Category' ? category : subCategory} showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DropdownListItem title={title == 'Category' ? item?.category_name : item?.sub_category_name} />} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ManageListItemsScreen;
