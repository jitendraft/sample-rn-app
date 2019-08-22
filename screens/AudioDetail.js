import React from 'react';
import { Button, Icon } from 'react-native-elements';
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    ScrollView,
    View,
} from 'react-native';


import { customStyles, height, width } from '../constants/Styles'


var cardHeight = height / 3;
var cardWidth = width;

export default class AudioDetail extends React.Component {
    static defaultNavigationOptions = {
        tabBarVisible: false,
    }
    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };
    render() {
        const { navigation } = this.props;
        const { goBack } = this.props.navigation;
        const imageUrl = navigation.getParam('imageUrl');
        const cardName = navigation.getParam('cardName');
        const cardMeta = navigation.getParam('cardMeta');
        return (
            <SafeAreaView style={customStyles.mainContainer} >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.imageContainer}>
                        <ImageBackground source={imageUrl} style={styles.imageBackground}
                            imageStyle={styles.cardImage}>
                            <View style={styles.imageContent}>
                                <View style={{ flex: 1, alignItems: "flex-start" }}>
                                    <Icon onPress={() => goBack()} name='keyboard-backspace' size={24}
                                        iconStyle={customStyles.textColor}
                                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }} />
                                </View>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-end" }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.audioHeader}>{cardName}</Text>
                                        <Text style={styles.audioText}>{cardMeta}</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.headerContainer}>
                        <View style={styles.headerInfo}>
                            <Text style={styles.audioText}>
                                Minim fugiat duis occaecat
                                magna fugiat tempor veniam mollit cupidatat adipisicing aute
                                excepteur. Eiusmod id laborum consectetur minim anim proident
                                 elit minim nisi. Occaecat id nostrud ipsum consequat.
                                 Minim culpa sunt mollit excepteur pariatur esse tempor
                                 dolor irure duis dolor proident enim.
                             </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.detailFooter}>
                    <View style={styles.footerTextRow}>
                        <View style={{ alignItems: 'flex-start', flex: 1 }}>
                            <Text style={styles.footerText}>View Source</Text>
                        </View>
                        <View style={{ flex: 1, padding: 0, alignItems: 'flex-end' }}>
                            <Button title="Like"
                                style={styles.subscribeButton} type="outline"
                                onPress={() => console.log("test")} />
                        </View>
                    </View>
                </View>
            </SafeAreaView >
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        padding: 10,
        paddingTop: 0
    },
    imageBackground: {
        width: cardWidth - 20,
        height: cardHeight,
    },
    imageContent: {
        flex: 1,
        padding: 10,
    },
    headerContainer: {
        paddingTop: 0,
        padding: 20,
        marginBottom: 20,
    },
    headerInfo: {
        justifyContent: 'space-between',
        textAlign: 'center'
    },
    audioHeader: {
        fontSize: 28,
        color: 'white',
        fontWeight: '400',
    },
    audioText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '200',
        lineHeight: 22,
        paddingBottom: 10,
    },
    cardImage: {
        borderRadius: 5,
    },
    detailFooter: {
        flex: 1,
        height: height / 12,
        width: width,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#4c4d7a'
    },
    footerTextRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
    },
    footerText: {
        color: 'white'
    }, subscribeButton: {
        overflow: 'hidden',
    }
})
