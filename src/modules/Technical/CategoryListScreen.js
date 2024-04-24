import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, DropdownListItem } from '../../components';
import CategoryTypes from '../../redux/CategoryRedux';
import styles from './styles/CategoryListScreenStyles';


const CategoryListScreen = ({ navigation, route }) => {
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

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} centerEnable={false} isTitle title={title} rightEnable onRightPress={onAddPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList data={title == 'Category' ? category : subCategory} showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DropdownListItem title={title == 'Category' ? item?.category_name : item?.sub_category_name} />} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default CategoryListScreen;
