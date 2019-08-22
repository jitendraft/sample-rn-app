import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'


export class SessionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: this.props.imageUrl || '',
            cardName: this.props.cardName || '',
            cardMeta: this.props.cardMeta || '',
        }
    }

    render() {
        if (this.state.cardName) {
            return (
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigateToAudioDetailPage(this.state.imageUrl, this.state.cardName, this.state.cardMeta)} >
                    <View style={styles.cardContainer} >
                        <View style={{ flex: 2 }}>
                            <Image source={this.state.imageUrl}
                                style={styles.cardImage} />
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardName}>{this.state.cardName}</Text>
                            <Text style={styles.cardMeta}>{this.state.cardMeta}</Text>
                        </View>
                    </View>
                </TouchableOpacity >
            )
        } else {
            return (null);
        }
    };
}

const styles = StyleSheet.create({

    cardContainer: {
        flex: 1,
        height: 220,
        width: 150,
        marginRight: 20,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#5C6BC0',
        alignItems: 'flex-start',
        overflow: 'hidden'
    },
    cardImage: {
        flex: 1,
        height: 220,
        width: 150,
        paddingLeft: 10,
        resizeMode: 'cover',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    cardInfo: {
        flex: 0.5,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    cardName: {
        fontWeight: 'bold',
        color: 'white'
    },
    cardMeta: {
        color: 'white'
    }
})
