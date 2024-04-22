import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, View, TextInput, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/CustomDropdownStyle';
import strings from '../constants/Strings';
import DropdownListItem from './DropdownListItem';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import icons from '../assets';

const CustomDropdown = ({
    selectedValue = '',
    setSelectedValue = () => { },
    placeholder = '',
    onOpen = () => { },
    dataList = [],
    onSelectItem = () => { },
    isDeletable = false,
    onDeletePress = () => { }
}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [search, setSearch] = useState('')

    return (
        <>
            <View style={styles.row}>
                <View style={styles.innerContainer}>
                    <Text style={styles.placeholder}>{placeholder}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <CustomTextInput
                            value={selectedValue}
                            editable={false}
                            placeholder={placeholder}
                            containerStyle={styles.emailContainer}
                            onChangeText={(text) => setSelectedValue(text)}
                        />
                    </TouchableOpacity>
                </View>
                {isDeletable && <TouchableOpacity onPress={onDeletePress} >
                    <Image style={styles.delete} source={icons.remove} resizeMode='contain' />
                </TouchableOpacity>}
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.container}>
                        <View style={styles.innerContainer}>
                            <TextInput
                                placeholder={strings.search}
                                autoCapitalize="none"
                                autoCorrect={false}
                                clearButtonMode="always"
                                value={search}
                                onChangeText={queryText => setSearch(queryText)}
                                style={styles.input}
                                placeholderTextColor={Colors.darkGray}
                            />
                            <FlatList
                                data={dataList}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => <DropdownListItem title={item} onPress={() => {
                                    onSelectItem(item)
                                    setModalVisible(false)
                                }} />}
                            />
                            <CustomButton
                                title={strings.cancel}
                                style={styles.cancelButton}
                                onPress={() => setModalVisible(false)}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

CustomDropdown.propTypes = {
    selectedValue: PropTypes.string,
    setSelectedValue: PropTypes.func,
    placeholder: PropTypes.string,
    onOpen: PropTypes.func,
    onSelectItem: PropTypes.func,
    dataList: PropTypes.array,
    isDeletable: PropTypes.bool
};
export default CustomDropdown;
