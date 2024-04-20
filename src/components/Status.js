import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/StatusStyle';

const Status = ({ title = '' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Status;
