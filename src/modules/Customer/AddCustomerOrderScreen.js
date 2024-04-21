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
    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState('')
    const [subCategories, setSubCategories] = useState(['c1', 'c2', 'c3'])


    const onBackPress = () => {
        setModalVisible(false)
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
                    <Text style={styles.placeholder}>{strings.product}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <CustomTextInput
                            value={product}
                            editable={false}
                            placeholder={strings.product}
                            containerStyle={styles.emailContainer}
                            onChangeText={(text) => setProduct(text)}
                        />
                    </TouchableOpacity>
                    {subCategories?.length > 0 && <Text style={styles.subCategoryTitle}>{strings.subCategories}</Text>}
                    <FlatList data={subCategories} renderItem={({ item, index }) => <AddSubCategoryField title={item} onDeletePress={() => onDelete(index)} />} />
                    <Text onPress={addSubCategory} style={styles.addSubcategoryTitle}>{strings.addSubCategories}</Text>
                    <CustomDropdown
                        search={search}
                        handleSearch={setSearch}
                        dataList={Products}
                        setModalVisible={setModalVisible}
                        onSelectItem={(item) => {
                            setProduct(item)
                            setModalVisible(false)
                        }}
                        modalVisible={modalVisible} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default AddCustomerOrderScreen;
