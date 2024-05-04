import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/UserInfoStyle';
import PropTypes from 'prop-types';
import strings from '../constants/Strings';

const Field = ({ placeholder, title }) => {
    return (<View>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>)
}

const UserInfo = ({ info = {} }) => {
    return (
        <View style={styles.container}>
            <Field placeholder={strings.firstname} title={info?.first_name} />
            <Field placeholder={strings.lastname} title={info?.last_name} />
            <Field placeholder={strings.email} title={info?.email} />
            <Field placeholder={strings.contact} title={info?.mobile_no} />
            <Field placeholder={strings.company} title={info?.company_name} />
            <Field placeholder={strings.Address} title={info?.company_address} />
        </View>
    );
};


UserInfo.propTypes = {
    info: PropTypes.object
};

export default UserInfo;
