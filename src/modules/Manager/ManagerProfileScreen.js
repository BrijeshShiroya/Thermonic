import React from 'react';
import { Alert, View } from 'react-native';
import styles from './styles/ManagerHomeScreenStyles';
import { CustomBackground, CustomButton, CustomHeader, ProfileField } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import strings from '../../constants/Strings';
import AuthTypes from '../../redux/AuthRedux';

const ManagerProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const { user } = useSelector(state => state?.auth)

    const onLogoutPress = () => {
        Alert.alert(strings.thermonic, strings.logoutConfirmation, [
            { text: strings.cancel, style: 'cancel' },
            {
                text: strings.logout,
                style: 'destructive',
                onPress: () => dispatch(AuthTypes.logoutRequest())
            },
        ]);
    }
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={[styles.container, styles.innerContainer]}>
                    <ProfileField style={styles.field} placeholder={'Email'} title={user?.email} />
                    <ProfileField style={styles.field} placeholder={'Name'} title={`${user?.first_name} ${user?.last_name}`} />
                    <ProfileField style={styles.field} placeholder={'Company Name'} title={user?.company_name || 'Thermonic'} />
                    <ProfileField style={styles.field} placeholder={'Contact'} title={user?.mobile_no} />
                </View>
                <CustomButton title={'Logout'} style={styles.logoutButton} onPress={onLogoutPress} />
            </CustomBackground>
        </View>
    );
};

export default ManagerProfileScreen;
