import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles/DropdownListItemStyle';
import icons from '../assets';
import { Colors } from '../theme';

const DropdownListItem = ({ title, containerStyle, onPress, isRight = false, isOption = false, onOptionPress = () => { } }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <Text style={styles.itemTitle}>{title}</Text>
            {isRight && <Image style={styles.next} tintColor={Colors.darkBlue} source={icons.next} />}
            {isOption && <TouchableOpacity onPress={onOptionPress}>
                <Image style={styles.bin} tintColor={Colors.darkBlue} source={icons.options} />
            </TouchableOpacity>}
        </TouchableOpacity>
    );
};

DropdownListItem.propTypes = {
    title: PropTypes.string,
    containerStyle: PropTypes.object,
    isRight: PropTypes.bool,
    onPress: PropTypes.func,
    isOption: PropTypes.bool,
    onOptionPress: PropTypes.func,
};

export default DropdownListItem;
