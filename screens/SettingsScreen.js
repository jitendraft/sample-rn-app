import React from 'react';

import {
	SafeAreaView, ScrollView,
	StyleSheet, Text, TouchableOpacity, View
} from 'react-native'

import { Divider } from 'react-native-elements';
import { customStyles, height } from '../constants/Styles'

export default class SettingsScreen extends React.Component {
	static navigationOptions = {
		title: 'Settings',
	};

	render() {
		return (
			<SafeAreaView style={customStyles.mainContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={customStyles.container}>
						<TouchableOpacity style={styles.settingsRow}>
							<Text style={styles.settingsText}>Account Settings</Text>
						</TouchableOpacity>
						<Divider style={{ backgroundColor: 'gray' }} />
						<TouchableOpacity style={styles.settingsRow}>
							<Text style={styles.settingsText}>Notification</Text>
						</TouchableOpacity>
						<Divider style={{ backgroundColor: 'gray' }} />
						<TouchableOpacity style={styles.settingsRow}>
							<Text style={styles.settingsText}>Support</Text>
						</TouchableOpacity>
						<Divider style={{ backgroundColor: 'gray' }} />
						<TouchableOpacity style={styles.settingsRow}>
							<Text style={styles.settingsText}>Language</Text>
						</TouchableOpacity>
						<Divider style={{ backgroundColor: 'gray' }} />
						<TouchableOpacity style={styles.settingsRow}>
							<Text style={styles.settingsText}>Obstacle</Text>
						</TouchableOpacity>
						<Divider style={{ backgroundColor: 'gray' }} />
						<TouchableOpacity style={styles.settingsRow}>
							<Text style={styles.settingsText}>Privacy Policy</Text>
						</TouchableOpacity>
						<Divider style={{ backgroundColor: 'gray' }} />
						<TouchableOpacity style={styles.settingsRow}>
							<Text style={styles.settingsText}>Terms & Condtions</Text>
						</TouchableOpacity>
						<Divider style={{ backgroundColor: 'gray' }} />
						<View style={{
							justifyContent: 'center',
							alignItems: 'center',
							paddingVertical: 10
						}}>
							<Text style={styles.versionText}>Theko App</Text>
							<Text style={styles.versionText}>Version 0.0.1</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	settingsRow: {
		height: height / 16,
		marginVertical: 10,
	},
	settingsText: {
		color: '#fff',
		fontSize: 22,
	},
	versionText: {
		color: '#fff',
		fontSize: 16,
	}
})
