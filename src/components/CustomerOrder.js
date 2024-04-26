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
                <Text style={styles.productName}>{item?.product_name}</Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.qty}>{`Quantity: ${item?.quantity}`}</Text>
                    <Status title={item?.client_status} />
                </View>
                <Text style={styles.other}>{`${item?.client_remark}`}</Text>
                <Text style={styles.other}>{`${item?.client_notes}`}</Text>
            </View>
        </View>
    );
};

export default CustomerOrder;
