import { View, StyleSheet, Text, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

function GameLogs({ guess, rounds }) {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.textContainer}> # {rounds}</Text>
			<Text style={styles.textContainer}> Opponent's Guess: {guess}</Text>
		</View>
	)
}
export default GameLogs

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	rootContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: deviceWidth < 380 ? 2 : 3,
		margin: deviceWidth < 380 ? 12 : 16,
		borderRadius: 16,
		backgroundColor: Colors.accent500,
		borderColor: Colors.primary600,
		padding: deviceWidth < 380 ? 10 : 16,
		width: deviceWidth < 380 ? '50%' : '80%',
	},
	textContainer: {
		fontFamily: 'open-sans',
		fontSize: deviceWidth < 380 ? 12 : 16,
	},
})
