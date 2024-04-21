import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/AddDispatcherScreenStyle';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddDispatcherScreen = ({ navigation, route }) => {

    const [dispatcherName, setDispatcherName] = useState('')
    const [dispatcherUsername, setDispatcherUsername] = useState('')
    const [dispatcherPassword, setDispatcherPassword] = useState('')
    const [dispatcherContact, setDispatcherContact] = useState('')

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAddPress = () => {
        alert('onAddDispatcherPress')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={'Add Dispatcher'} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <KeyboardAwareScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                    <Text style={styles.placeholder}>{strings.workerName}</Text>
                    <CustomTextInput
                        value={dispatcherName}
                        placeholder={strings.dispatcherName}
                        containerStyle={styles.categoryContainer}
                        onChangeText={text => setDispatcherName(text)}
                    />
                    <Text style={styles.placeholder}>{strings.username}</Text>
                    <CustomTextInput
                        value={dispatcherUsername}
                        placeholder={strings.username}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setDispatcherUsername(text)}
                    />
                    <Text style={styles.placeholder}>{strings.password}</Text>
                    <CustomTextInput
                        value={dispatcherPassword}
                        placeholder={strings.password}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setDispatcherPassword(text)}
                    />
                    <Text style={styles.placeholder}>{strings.contact}</Text>
                    <CustomTextInput
                        value={dispatcherContact}
                        placeholder={strings.contact}
                        keyboardType='number-pad'
                        maxLength={10}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setDispatcherContact(text)}
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

export default AddDispatcherScreen;
