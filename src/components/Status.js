import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/StatusStyle';
import { OrderStatus } from '../services/Utils';

const Status = ({ title = '' }) => {

    const StatusObj = {
        [OrderStatus.pending]: 'Pending',
        [OrderStatus.processing]: 'Processing',
        [OrderStatus.accepted]: 'Accepted',
        [OrderStatus.dispatch]: 'Dispatched',
        [OrderStatus.completed]: 'Completed',
    }

    return (
        <View style={styles.container}>
            {StatusObj?.[title] && <Text style={styles.title}>{StatusObj[title]}</Text>}
        </View>
    );
};

export default Status;
