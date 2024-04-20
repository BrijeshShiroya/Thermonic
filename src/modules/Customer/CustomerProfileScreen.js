import React from 'react';
import { View } from 'react-native';
import styles from './styles/CustomerProfileScreenStyles';
import { CustomBackground, CustomHeader, CustomButton, ProfileField } from '../../components';
import { useDispatch } from 'react-redux';

const CustomerProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onLogoutPress = () => {
        dispatch({ type: 'LOGOUT' })
    }
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={[styles.container, styles.innerContainer]}>
                    <ProfileField style={styles.field} placeholder={'Email'} title={'brijesh@yopmail.com'} />
                    <ProfileField style={styles.field} placeholder={'Name'} title={'Brijesh Shiroya'} />
                    <ProfileField style={styles.field} placeholder={'Company Name'} title={'Thermonic Sensor india private limited'} />
                    <ProfileField style={styles.field} placeholder={'Contact'} title={'+91 9558050804'} />
                    <ProfileField style={styles.field} placeholder={'Website'} title={'www.google.com'} />
                </View>
                <CustomButton title={'Logout'} style={styles.logoutButton} onPress={onLogoutPress} />
            </CustomBackground>
        </View>
    );
};

export default CustomerProfileScreen;
