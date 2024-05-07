import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Status from './Status';
import styles from './styles/CustomerOrderStyle';
import { Colors } from '../theme';
import icons from '../assets';
import moment from 'moment';

const CustomerOrder = ({ item, isOptional = false, onOptionPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.footerContainer}>
                    <Text style={styles.title}>{item?.id}</Text>
                    {isOptional && <TouchableOpacity onPress={onOptionPress}>
                        <Image style={styles.bin} tintColor={Colors.darkBlue} source={icons.options} />
                    </TouchableOpacity>}
                </View>

                <Text style={styles.productName}>{item?.product_name}</Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.qty}>{`Quantity: ${item?.quantity}`}</Text>
                    <Status title={item?.client_status} />
                </View>
                <Text style={styles.other}>{`${item?.client_remark}`}</Text>
                <Text style={styles.other}>{`${item?.client_notes}`}</Text>
                {/* <Text style={styles.other}>{`${moment(item?.created_date).format('DD/MM/YYYY HH:mm')}`}</Text> */}
            </View>
        </View>
    );
};


CustomerOrder.propTypes = {
    item: PropTypes.object,
    isOptional: PropTypes.bool,
    onOptionPress: PropTypes.func
};


export default CustomerOrder;
