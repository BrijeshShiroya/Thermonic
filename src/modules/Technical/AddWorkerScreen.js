import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/AddWorkerScreenStyle';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddWorkerScreen = ({ navigation, route }) => {

    const [workerName, setWorkerName] = useState('')
    const [workerUsername, setWorkerUsername] = useState('')
    const [workerPassword, setWorkerPassword] = useState('')
    const [workerContact, setWorkerContact] = useState('')

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAddPress = () => {
        alert('onAddWorkerPress')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={'Add Worker'} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <KeyboardAwareScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                    <Text style={styles.placeholder}>{strings.workerName}</Text>
                    <CustomTextInput
                        value={workerName}
                        placeholder={strings.workerName}
                        containerStyle={styles.categoryContainer}
                        onChangeText={text => setWorkerName(text)}
                    />
                    <Text style={styles.placeholder}>{strings.username}</Text>
                    <CustomTextInput
                        value={workerUsername}
                        placeholder={strings.username}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setWorkerUsername(text)}
                    />
                    <Text style={styles.placeholder}>{strings.password}</Text>
                    <CustomTextInput
                        value={workerPassword}
                        placeholder={strings.password}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setWorkerPassword(text)}
                    />
                    <Text style={styles.placeholder}>{strings.contact}</Text>
                    <CustomTextInput
                        value={workerContact}
                        placeholder={strings.contact}
                        keyboardType='number-pad'
                        maxLength={10}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setWorkerContact(text)}
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

export default AddWorkerScreen;
