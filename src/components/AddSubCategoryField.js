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

    return (
        <View style={styles.container}>
            <CustomDropdown
                selectedValue={subCategory}
                setSelectedValue={setSubCategory}
                dataList={SubCategories}
                isDeletable
                onSelectItem={(item) => {
                    setSubCategory(item)
                }}
                onDeletePress={onDeletePress}
            />
        </View>
    );
};

AddSubCategoryField.propTypes = {
    onDeletePress: PropTypes.func,
};

export default AddSubCategoryField;
