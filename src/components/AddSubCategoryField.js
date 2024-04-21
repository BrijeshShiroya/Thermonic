import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/AddSubCategoryFieldStyle';
import icons from '../assets';
import CustomTextInput from './CustomTextInput';
import strings from '../constants/Strings';
import CustomDropdown from './CustomDropdown';

const SubCategories = [
    '7mm',
    'PST',
    '8mm',
    '1/2BSP'
]

const AddSubCategoryField = ({
    onDeletePress,
    title
}) => {
    const [subCategory, setSubCategory] = useState('')
    const [modalVisible, setModalVisible] =
        useState(false);
    const [search, setSearch] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
                    <CustomTextInput
                        value={subCategory}
                        editable={false}
                        placeholder={strings.subCategory}
                        containerStyle={styles.inputContainer}
                        onChangeText={(text) => { }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDeletePress} >
                    <Image style={styles.delete} source={icons.remove} resizeMode='contain' />
                </TouchableOpacity>
            </View>
            <CustomDropdown
                search={search}
                handleSearch={setSearch}
                dataList={SubCategories}
                setModalVisible={setModalVisible}
                onSelectItem={(item) => {
                    setSubCategory(item)
                    setModalVisible(false)
                }}
                modalVisible={modalVisible} />
        </View>
    );
};

AddSubCategoryField.propTypes = {
    onDeletePress: PropTypes.func,
};

export default AddSubCategoryField;
