import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/TechnicalProfileScreenStyles';
import { CustomBackground, CustomButton, CustomHeader } from '../../components';

const TechnicalProfileScreen = ({ navigation }) => {

    const onLogoutPress = () => {

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
