import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View, TextInput, FlatList } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/CustomDropdownStyle';
import strings from '../constants/Strings';
import DropdownListItem from './DropdownListItem';
import CustomButton from './CustomButton';

const CustomDropdown = ({
    modalVisible = false,
    setModalVisible = () => { },
    dataList = [],
    search,
    onSelectItem = () => { },
    handleSearch = () => { },
}) => {
    return (
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
                            onChangeText={queryText => handleSearch(queryText)}
                            style={styles.input}
                            placeholderTextColor={Colors.darkGray}
                        />
                        <FlatList
                            data={dataList}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <DropdownListItem title={item} onPress={() => onSelectItem(item)} />}
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
    );
};

CustomDropdown.propTypes = {
    title: PropTypes.string,
    modalVisible: PropTypes.bool,
    setModalVisible: PropTypes.fun,
    handleSearch: PropTypes.fun,
    onSelectItem: PropTypes.fun,
    search: PropTypes.string,
    dataList: PropTypes.array
};
export default CustomDropdown;
