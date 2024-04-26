import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';
import CustomDropdown from './CustomDropdown';
import styles from './styles/AddSubCategoryFieldStyle';

const DATA = [
    '500ML',
    '700ML',
    '800ML',
    'Sub 1',
    'Sub 2'
]

const AddSubCategoryField = ({
    onDeletePress,
    title,
    onSelectPress
}) => {
    const [subCategory, setSubCategory] = useState('')

    const onSelect = (item) => {
        onSelectPress(item)
    }

    return (
        <View style={styles.container}>
            <CustomDropdown
                selectedValue={title}
                setSelectedValue={() => { }}
                dataList={DATA}
                isDeletable
                onSelectItem={(item) => {
                    onSelect(item)
                }}
                onDeletePress={onDeletePress}
            />
        </View>
    );
};

AddSubCategoryField.propTypes = {
    title: PropTypes.string,
    onDeletePress: PropTypes.func,
    onSelectPress: PropTypes.func,
};

export default AddSubCategoryField;
