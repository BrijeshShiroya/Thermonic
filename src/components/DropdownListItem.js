import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from './styles/DropdownListItemStyle';

const DropdownListItem = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.itemTitle}>{title}</Text>
        </View>
    );
};

DropdownListItem.propTypes = {
    title: PropTypes.string,
};

export default DropdownListItem;
