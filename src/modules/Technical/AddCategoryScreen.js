import React, { useEffect, useState } from 'react';
import { Keyboard, Text, View } from 'react-native';
import styles from './styles/AddCategoryScreenStyle';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput, Loader } from '../../components';
import strings from '../../constants/Strings';
import { useDispatch, useSelector } from 'react-redux';
import CategoryTypes from '../../redux/CategoryRedux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const AddCategoryScreen = ({ navigation, route }) => {

    const dispatch = useDispatch();

    const title = route?.params?.categoryType == 1 ? 'Add Category' : 'Add Sub Category'
    const [categoryName, setCategoryName] = useState('')
    const { fetching } = useSelector(state => state.category);

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAddPress = () => {
        if (categoryName != '') {
            Keyboard.dismiss();
            route?.params?.categoryType == 1 ?
                dispatch(CategoryTypes.addCategoryRequest(categoryName)) :
                dispatch(CategoryTypes.addSubCategoryRequest(categoryName))
        }
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={title} leftEnable onLeftPress={onBackPress} />
            <CustomBackground >
                <View style={styles.innerContainer}>
                    <KeyboardAwareScrollView>
                        <Text style={styles.placeholder}>{route?.params?.categoryType == 1 ? strings.category : strings.subCategory}</Text>
                        <CustomTextInput
                            value={categoryName}
                            placeholder={route?.params?.categoryType == 1 ? strings.category : strings.subCategory}
                            containerStyle={styles.categoryContainer}
                            onChangeText={text => setCategoryName(text)}
                        />
                    </KeyboardAwareScrollView>
                </View>
                <CustomButton
                    title={strings.add}
                    style={styles.addCategoryButton}
                    onPress={onAddPress}
                />
            </CustomBackground>

            {fetching && <Loader />}
        </View>
    );
};

export default AddCategoryScreen;
