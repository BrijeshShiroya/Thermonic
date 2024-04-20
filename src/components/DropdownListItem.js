import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/DropdownListItemStyle';
import icons from '../assets';

const DropdownListItem = ({ title, containerStyle, onPress, isRight = false }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <Text style={styles.itemTitle}>{title}</Text>
            {isRight && <Image style={styles.next} source={icons.next} />}
        </TouchableOpacity>
    );
};

DropdownListItem.propTypes = {
    title: PropTypes.string,
    containerStyle: PropTypes.object,
    isRight: PropTypes.bool,
    onPress: PropTypes.func,
};

export default DropdownListItem;
