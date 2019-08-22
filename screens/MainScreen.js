import React from 'react';

import {
    Image,
    StyleSheet,
    ScrollView,
    View,
} from 'react-native';

import { height, width } from '../constants/Styles'
import { SessionCard } from '../components/SessionCard'


var cardHeight = height / 4;
var cardWidth = width - 40;

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarVisible: false,
    };

    render() {
        const { navigate } = this.props.navigation;
        navigateToAudioDetailPage = (imageUrl, cardName, cardMeta) => {
            navigate('AudioDetail', {
                imageUrl: imageUrl,
                cardName: cardName,
                cardMeta: cardMeta,
            })
        }
        return (
            <View style={styles.mainContainer}>
                <ScrollView
                    scrollEventThrottle={16} style={styles.container}>
                    <View style={{ flex: 1, padding: 0, overflow: 'hidden', borderBottomLeftRadius: 35 }}>
                        <Image source={require('../assets/images/session/image2.jpg')}
                            style={{ height: height / 2.5, resizeMode: 'cover', flex: 1, width: width }}
                        />
                    </View>
                    <View style={styles.scrollContainer}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                            <SessionCard
                                navigateToAudioDetailPage={navigateToAudioDetailPage}
                                cardName={'Politics'}
                                cardMeta={'lorem ipsum'}
                                imageUrl={require('../assets/images/session/image1.jpg')}
                            />
                            <SessionCard
                                navigateToAudioDetailPage={navigateToAudioDetailPage}
                                cardName={'Science'}
                                cardMeta={'lorem ipsum'}
                                imageUrl={require('../assets/images/session/image3.jpg')}
                            />
                            <SessionCard
                                navigateToAudioDetailPage={navigateToAudioDetailPage}
                                cardName={'Sports'}
                                cardMeta={'lorem ipsum'}
                                imageUrl={require('../assets/images/session/image2.jpg')}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#3D3B60',
    },
    container: {
        flex: 1
    },
    scrollContainer: {
        padding: 20,
        marginTop: 30,
    },
    headerContainer: {
        marginTop: 20,
        marginBottom: 20,
        padding: 10,
        borderColor: '#ECEFF1',
        backgroundColor: '#ECEFF1',
        borderRadius: 5,
        height: 50,
        borderWidth: 0.5,
    },
    header: {
        fontSize: 20,
        fontWeight: '600',
    },
    cardImage: {
        flex: 1,
        width: cardWidth,
        height: cardHeight,
        resizeMode: 'cover',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    }
})
