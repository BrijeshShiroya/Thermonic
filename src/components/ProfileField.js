import PropTypes from 'prop-types';
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/ProfileFieldStyle';

const ProfileField = ({ placeholder, title, style }) => {
    return (
        <View style={style}>
            <Text style={styles.placeholder}>{placeholder}</Text>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

ProfileField.propTypes = {
    style: PropTypes.object,
    placeholder: PropTypes.string,
    title: PropTypes.string,
};

export default ProfileField;
