import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/TechnicalHomeScreenStyles';
import { CustomBackground, CustomHeader } from '../../components';

const AddCategoryScreen = ({ navigation, route }) => {

    const title = route?.params?.categoryType == 1 ? 'Add Category' : 'Add Sub Category'

    const onBackPress = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={title} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <Text>{title}</Text>
            </CustomBackground>
        </View>
    );
};

export default AddCategoryScreen;
