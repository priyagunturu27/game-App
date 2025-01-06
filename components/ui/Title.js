import { Text, StyleSheet, View, Platform } from 'react-native'

import Colors from '../../constants/colors'

function Title({ children }) {
	return (
		<View>
			<Text style={styles.title}>{children}</Text>
		</View>
	)
}
export default Title

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		//borderWidth: Platform.OS === 'android' ? 2 : 0,   we can write in 2 ways
		borderWidth: Platform.select({ android: 2, ios: 0 }),
		padding: 12,
		textAlign: 'center',
		borderColor: 'white',
		color: 'white',
		maxWidth: '80%',
		width: 300,
	},
})
