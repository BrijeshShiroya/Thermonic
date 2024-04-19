import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/LoaderStyle';

const Loader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.indicator}>
                <ActivityIndicator color={Colors.themeBlue} size={'large'} />
            </View>
        </View>
    );
};

export default Loader;
