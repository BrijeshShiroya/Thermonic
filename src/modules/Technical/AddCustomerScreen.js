import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/AddCustomerScreenStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddCustomerScreen = ({ navigation, route }) => {

    const [customerFName, setCustomerFName] = useState('')
    const [customerLName, setCustomerLName] = useState('')
    const [customerPassword, setCustomerPassword] = useState('')
    const [customerContact, setCustomerContact] = useState('')
    const [customerEmail, setCustomerEmail] = useState('')
    const [customerCompany, setCustomerCompany] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')

    const onBackPress = () => {
        navigation.goBack();
    }

    const onAddPress = () => {
        alert('On Add Customer Press')
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={'Add Customer'} leftEnable onLeftPress={onBackPress} />
            <CustomBackground>
                <KeyboardAwareScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                    <Text style={styles.placeholder}>{strings.firstname}</Text>
                    <CustomTextInput
                        value={customerFName}
                        placeholder={strings.firstname}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerFName(text)}
                    />
                    <Text style={styles.placeholder}>{strings.lastname}</Text>
                    <CustomTextInput
                        value={customerLName}
                        placeholder={strings.lastname}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerLName(text)}
                    />
                    <Text style={styles.placeholder}>{strings.email}</Text>
                    <CustomTextInput
                        value={customerEmail}
                        placeholder={strings.email}
                        keyboardType={'email-address'}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerEmail(text)}
                    />
                    <Text style={styles.placeholder}>{strings.password}</Text>
                    <CustomTextInput
                        value={customerPassword}
                        placeholder={strings.password}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerPassword(text)}
                    />
                    <Text style={styles.placeholder}>{strings.contact}</Text>
                    <CustomTextInput
                        value={customerContact}
                        placeholder={strings.contact}
                        keyboardType='number-pad'
                        maxLength={10}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerContact(text)}
                    />
                    <Text style={styles.placeholder}>{strings.company}</Text>
                    <CustomTextInput
                        value={customerCompany}
                        placeholder={strings.company}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerCompany(text)}
                    />
                    <Text style={styles.placeholder}>{strings.Address}</Text>
                    <CustomTextInput
                        value={customerAddress}
                        placeholder={strings.Address}
                        containerStyle={styles.fieldContainer}
                        onChangeText={text => setCustomerAddress(text)}
                    />
                    <CustomButton
                        title={strings.add}
                        style={styles.addCategoryButton}
                        onPress={onAddPress}
                    />
                </KeyboardAwareScrollView>

            </CustomBackground>
        </View>
    );
};

export default AddCustomerScreen;
