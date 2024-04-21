import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/AddManagerScreenStyle';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddManagerScreen = ({ navigation, route }) => {

    const [managerName, setManagerName] = useState('')
    const [managerUsername, setManagerUsername] = useState('')
    const [managerPassword, setManagerPassword] = useState('')
    const [managerContact, setManagerContact] = useState('')

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAddPress = () => {
        alert('onAddManagerPress')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={'Add Manager'} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <KeyboardAwareScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                    <Text style={styles.placeholder}>{strings.managerName}</Text>
                    <CustomTextInput
                        value={managerName}
                        placeholder={strings.managerName}
                        containerStyle={styles.categoryContainer}
                        onChangeText={text => setManagerName(text)}
                    />
                    <Text style={styles.placeholder}>{strings.username}</Text>
                    <CustomTextInput
                        value={managerUsername}
                        placeholder={strings.username}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setManagerUsername(text)}
                    />
                    <Text style={styles.placeholder}>{strings.password}</Text>
                    <CustomTextInput
                        value={managerPassword}
                        placeholder={strings.password}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setManagerPassword(text)}
                    />
                    <Text style={styles.placeholder}>{strings.contact}</Text>
                    <CustomTextInput
                        value={managerContact}
                        placeholder={strings.contact}
                        keyboardType='number-pad'
                        maxLength={10}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setManagerContact(text)}
                    />
                </KeyboardAwareScrollView>
                <CustomButton
                    title={strings.add}
                    style={styles.addCategoryButton}
                    onPress={onAddPress}
                />
            </CustomBackground>
        </View>
    );
};

export default AddManagerScreen;
