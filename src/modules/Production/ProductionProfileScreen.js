import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ProductionHomeScreenStyles';
import { CustomBackground, CustomHeader, CustomButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';

const ProductionProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth)

    const onLogoutPress = () => {
        dispatch({ type: 'LOGOUT' })
    }
    return (
        <View style={styles.mainContainer}>
            <CustomHeader />
            <CustomBackground>
                <View style={styles.container}>
                    <Text>Production</Text>
                    <Text>{user?.email}</Text>
                    <CustomButton title={'Logout'} style={styles.logoutButton} onPress={onLogoutPress} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default ProductionProfileScreen;
