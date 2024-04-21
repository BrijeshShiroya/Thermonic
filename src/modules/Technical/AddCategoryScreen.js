import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/AddCategoryScreenStyle';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';

const AddCategoryScreen = ({ navigation, route }) => {

    const title = route?.params?.categoryType == 1 ? 'Add Category' : 'Add Sub Category'
    const [categoryName, setCategoryName] = useState('')

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAddPress = () => {
        alert('onAddCategoryPress')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={title} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <View style={styles.innerContainer}>
                    <Text style={styles.placeholder}>{route?.params?.categoryType == 1 ? strings.category : strings.subCategory}</Text>
                    <CustomTextInput
                        value={categoryName}
                        placeholder={route?.params?.categoryType == 1 ? strings.category : strings.subCategory}
                        keyboardType={'email-address'}
                        containerStyle={styles.categoryContainer}
                        onChangeText={text => setCategoryName(text)}
                    />
                </View>
                <CustomButton
                    title={strings.add}
                    style={styles.addCategoryButton}
                    onPress={onAddPress}
                />
            </CustomBackground>
        </View>
    );
};

export default AddCategoryScreen;
