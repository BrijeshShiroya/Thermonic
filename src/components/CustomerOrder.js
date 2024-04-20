import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/CustomerOrderStyle';
import Status from './Status';

const CustomerOrder = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{item?.id}</Text>
                <Text style={styles.productName}>{item?.productName}</Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.qty}>{`Quantity: ${item?.qty}`}</Text>
                    <Status title={item?.status} />
                </View>
                <Text style={styles.other}>{`${item?.other}`}</Text>
            </View>
        </View>
    );
};

export default CustomerOrder;
