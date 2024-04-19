import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ManagerHomeScreenStyles';
import { CustomBackground, CustomHeader, CustomButton } from '../../components';
import { useDispatch } from 'react-redux';

const ManagerProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onLogoutPress = () => {
        dispatch({ type: 'LOGOUT' })
    }
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.container}>
                    <Text>Manager Profile</Text>
                    <CustomButton title={'Logout'} style={styles.logoutButton} onPress={onLogoutPress} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ManagerProfileScreen;
