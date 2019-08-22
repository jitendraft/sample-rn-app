import React from 'react';
import { Button, Icon, Text, Input } from 'react-native-elements';

import { StyleSheet, View, } from 'react-native';
import { LinearGradient } from 'expo';

import { customStyles } from '../constants/Styles'


export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        const { goBack } = this.props.navigation;
        return (
            <LinearGradient style={customStyles.mainContainer}
                colors={['#50A7C2', '#B7F8DB']}>
                <View style={customStyles.container}>
                    <View style={customStyles.firstRow}>
                        <Icon onPress={() => goBack()} name='keyboard-backspace' size={24} iconStyle={customStyles.textColor}></Icon>
                        <Text h5 style={customStyles.textColor}>Forgot Password?</Text>
                    </View>
                    <View>
                        <Text h3 style={customStyles.textColor}>Sign Up</Text>
                    </View>
                    <View style={[styles.signUpForm,]}>
                        <Text h5 style={customStyles.textColor}>First Name</Text>
                        <Input placeholderTextColor='#03A9F4' inputStyle={[customStyles.textColor, styles.inputText]}
                            inputContainerStyle={[styles.marginBottom20, styles.inputContainerStyle]} />
                        <Text h5 style={customStyles.textColor}>Last Name</Text>
                        <Input inputStyle={[customStyles.textColor, styles.inputText]}
                            inputContainerStyle={[styles.marginBottom20, styles.inputContainerStyle]} />
                        <Text h5 style={customStyles.textColor}>Email</Text>
                        <Input inputStyle={[customStyles.textColor, styles.inputText]}
                            inputContainerStyle={[styles.marginBottom20, styles.inputContainerStyle]} />
                        <Text h5 style={customStyles.textColor}>Password</Text>
                        <Input inputStyle={[customStyles.textColor, styles.inputText]}
                            inputContainerStyle={[styles.marginBottom20, styles.inputContainerStyle]} />
                        <Button buttonStyle={styles.button} titleStyle={customStyles.textColor} type='outline' title='Create Account' />
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#01579B',
        overflow: 'hidden',
    },
    marginBottom20: {
        marginBottom: 20,
    },
    signUpForm: {
        marginTop: 20,
    },
    inputText: {
        fontSize: 22,
        borderBottomColor: '#01579B',
    },
    inputContainerStyle: {
        borderBottomColor: '#01579B',
    }
})
