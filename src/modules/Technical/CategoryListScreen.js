import React, { createRef, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomBackground, CustomHeader, DropdownListItem, OptionsActionSheet } from '../../components';
import CategoryTypes from '../../redux/CategoryRedux';
import styles from './styles/CategoryListScreenStyles';
import { SheetManager } from 'react-native-actions-sheet';


const CategoryListScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const title = route?.params?.manageItem;

    const [selected, setSelected] = useState()

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

    const openActionSheet = (item) => {
        SheetManager.show('categoryOption', { payload: item })
    }

    const onOptionPress = (item) => {
        if (item == 'Delete') {
            if (title == 'Category') {
                dispatch(CategoryTypes.deleteCategoryRequest(selected?.id))
            } else {
                dispatch(CategoryTypes.deleteSubCategoryRequest(selected?.id))
            }
            SheetManager.hide('categoryOption')
            setSelected()
        } else {
            SheetManager.hide('categoryOption')
            setSelected()
        }

    }

    const onBeforeShow = (data) => {
        setSelected(data)
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} centerEnable={false} isTitle title={title} rightEnable onRightPress={onAddPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <FlatList data={title == 'Category' ? category : subCategory} showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => <DropdownListItem containerStyle={styles.itemContainer} title={title == 'Category' ? item?.category_name : item?.sub_category_name} isOption onOptionPress={() => openActionSheet(item)} />} />
                </View>
                <OptionsActionSheet id={'categoryOption'} options={['Delete', 'Cancel']} onBeforeShow={onBeforeShow} onOptionPress={(item) => onOptionPress(item)} />
            </CustomBackground>
        </View>
    );
};

export default CategoryListScreen;
