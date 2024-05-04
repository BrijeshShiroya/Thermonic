import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/StatusStyle';
import { OrderStatus } from '../services/Utils';
import PropTypes from 'prop-types';

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

Status.propTypes = {
    title: PropTypes.string
};

export default Status;
