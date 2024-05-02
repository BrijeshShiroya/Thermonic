import React, { useEffect, useState } from 'react';
import { Alert, Platform, Text, View } from 'react-native';
import { CustomBackground, CustomButton, CustomHeader, CustomTextInput, Loader } from '../../components';
import strings from '../../constants/Strings';
import styles from './styles/AddCustomerScreenStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import UsersTypes from '../../redux/UsersRedux';
import { UserType } from '../../services/Utils';

const AddCustomerScreen = ({ navigation, route }) => {

    const { fetching } = useSelector(state => state.users)

    const type = route?.params?.type

    const getTitle = () => {
        if (type == UserType.client) {
            return 'Add Customer'
        } else if (type == UserType.worker) {
            return 'Add Worker'
        } else if (type == UserType.dispatch) {
            return 'Add Dispatcher'
        } else if (type == UserType.manager) {
            return 'Add Manager'
        } else {
            return "Add Owner"
        }
    }

    const dispatch = useDispatch()

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
        if (customerFName != '' &&
            customerLName != '' &&
            customerPassword != '' &&
            customerContact != '' &&
            customerEmail != '' &&
            customerCompany != '' &&
            customerAddress != '') {
            dispatch(UsersTypes.addUserRequest({
                first_name: customerFName,
                last_name: customerLName,
                email: customerEmail,
                mobile_no: customerContact,
                password: customerPassword,
                device_type: Platform.OS,
                device_token: '1222',
                company_name: customerCompany,
                company_address: customerAddress,
                role: type,
                address: customerAddress
            }))
        } else {
            Alert.alert(strings.thermonic, strings.fillAllDetails);
        }
    }

    return (
        <View style={styles.mainContainer}>
            <CustomHeader centerEnable={false} isTitle title={getTitle()} leftEnable onLeftPress={onBackPress} />
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
                        multiline
                        style={styles.address}
                        value={customerAddress}
                        numberOfLines={4}
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
            {fetching && <Loader />}
        </View>
    );
};

export default AddCustomerScreen;
