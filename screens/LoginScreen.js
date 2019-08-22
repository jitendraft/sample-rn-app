import React from 'react';
import { Button, Icon, Text } from 'react-native-elements';

import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo';

import { customStyles } from '../constants/Styles'


export default class LoginInScreen extends React.Component {
    static defaultNavigationOptions = {
        header: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <LinearGradient style={customStyles.mainContainer}
                colors={['#50A7C2', '#B7F8DB']}>
                <View style={customStyles.container}>
                    <View style={customStyles.firstRow}>
                        <Icon name='clear' onPress={() => navigate('HomeStack')} size={24} iconStyle={customStyles.textColor}></Icon>
                        <Text h5 style={customStyles.textColor} onPress={() => navigate('LoginInForm')}>Log in</Text>
                    </View>
                    <View style={[styles.iconStyle, styles.marginBottom10]}>
                        <Icon name='local-florist' type='material' iconStyle={customStyles.textColor} size={80}></Icon>
                    </View>
                    <View style={[styles.marginBottom10]}>
                        <Text h3 style={[customStyles.textColor, styles.marginBottom10]}>Welcome to Teko.</Text>
                        <Button buttonStyle={styles.button} titleStyle={customStyles.textColor} type='outline' title='Continue with Google' />
                        <Button buttonStyle={styles.button} titleStyle={customStyles.textColor} type='outline' title='Create Account'
                            onPress={() => navigate('SignUpScreen')} />
                    </View>
                    <View style={styles.eulaText}>
                        <Text h5 style={customStyles.textColor}>By tapping Continue, Create Account, I agree to Teko's Terms of Service, Payment Terms and End User agreement.</Text>
                    </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        alignItems: 'flex-start',
    },
    button: {
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#01579B',
        overflow: 'hidden',
    },
    marginBottom10: {
        marginBottom: 10,
    }
})
