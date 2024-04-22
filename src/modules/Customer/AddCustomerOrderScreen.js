import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { AddSubCategoryField, CustomBackground, CustomDropdown, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/AddCustomerOrderScreenStyles';

const Products = [
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
    'PT100Head',
    'PT200Head',
    'PT200Head1',
    'PT200Head7',
    'PT100Head1',
    'PT700Head7',
]

const AddCustomerOrderScreen = ({ navigation }) => {

    const [product, setProduct] = useState('')
    const [subCategories, setSubCategories] = useState(['c1', 'c2', 'c3'])


    const onBackPress = () => {
        navigation.goBack()
    }

    const addSubCategory = () => {
        setSubCategories([...subCategories, '1'])
    }

    const onDelete = (index) => {
        const _subCategories = [...subCategories];
        _subCategories.splice(index, 1)
        setSubCategories(_subCategories)
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomDropdown
                        placeholder={strings.product}
                        selectedValue={product}
                        setSelectedValue={(text) => setProduct(text)}
                        dataList={Products}
                        onSelectItem={(item) => {
                            setProduct(item)
                        }} />
                    {subCategories?.length > 0 && <Text style={styles.subCategoryTitle}>{strings.subCategories}</Text>}
                    <FlatList data={subCategories} renderItem={({ item, index }) => <AddSubCategoryField title={item} onDeletePress={() => onDelete(index)} />} />
                    <Text onPress={addSubCategory} style={styles.addSubcategoryTitle}>{strings.addSubCategories}</Text>

                </View>
            </CustomBackground>
        </View>
    );
};

export default AddCustomerOrderScreen;
