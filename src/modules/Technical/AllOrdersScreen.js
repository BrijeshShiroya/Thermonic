import React from 'react';
import { View } from 'react-native';
import styles from './styles/AllOrderScreenStyles';
import { CustomBackground, CustomButton, CustomHeader } from '../../components';
import strings from '../../constants/Strings';

const AllOrderScreen = ({ navigation }) => {

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <CustomButton style={styles.button} title={strings.accepted} onPress={() => navigation.navigate("OrderListScreen", { type: 1 })} />
                    <CustomButton style={styles.button} title={strings.pending} onPress={() => navigation.navigate("OrderListScreen", { type: 2 })} />
                    <CustomButton style={styles.button} title={strings.inProgress} onPress={() => navigation.navigate("OrderListScreen", { type: 3 })} />
                    <CustomButton style={styles.button} title={strings.dispatched} onPress={() => navigation.navigate("OrderListScreen", { type: 4 })} />
                </View>
            </CustomBackground>
        </View>
    );
};

export default AllOrderScreen;
