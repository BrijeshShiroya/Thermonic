import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import CustomDropdown from './CustomDropdown';
import styles from './styles/AddSubCategoryFieldStyle';
import { useSelector } from 'react-redux';


const AddSubCategoryField = ({
    onDeletePress,
    title,
    onSelectPress
}) => {
    const { subCategory } = useSelector(state => state.category)

    const filteredSubCategory = subCategory?.map(cate => cate?.sub_category_name)

    const onSelect = (item) => {
        onSelectPress(item)
    }

    return (
        <View style={styles.container}>
            <CustomDropdown
                selectedValue={title}
                setSelectedValue={() => { }}
                dataList={filteredSubCategory}
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
