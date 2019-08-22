import { StyleSheet, Dimensions } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

export var { height, width } = Dimensions.get('window');
export var aspectRation = height / width;

export const customStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: getStatusBarHeight() + 5,
        backgroundColor: '#3D3B60',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    firstRow: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textColor: {
        color: '#01579B'
    },
    header: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white'
    },
    mainBackGround: {
        backgroundColor: '#3D3B60',
    },
})