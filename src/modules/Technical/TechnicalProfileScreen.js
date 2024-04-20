import React from 'react';
import { Alert, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CustomBackground, CustomButton, CustomHeader, ProfileField } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/TechnicalProfileScreenStyles';


const TechnicalProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onLogoutPress = () => {
        Alert.alert(strings.thermonic, strings.logoutConfirmation, [
            { text: strings.cancel, style: 'cancel' },
            {
                text: strings.logout,
                style: 'destructive',
                onPress: () => dispatch({ type: 'LOGOUT' }),
            },
        ]);
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

export default TechnicalProfileScreen;
