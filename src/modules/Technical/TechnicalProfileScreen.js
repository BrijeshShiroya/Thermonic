import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/TechnicalProfileScreenStyles';
import { CustomBackground, CustomButton, CustomHeader } from '../../components';
import { AuthContext } from '../../navigation/AppNavigation';
import { useDispatch } from 'react-redux';

const TechnicalProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const onLogoutPress = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.container}>
                    <Text>Technical Profile</Text>
                    <CustomButton title={'Logout'} style={styles.logoutButton} onPress={onLogoutPress} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default TechnicalProfileScreen;
