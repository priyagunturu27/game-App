import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'
import PrimaryButton from '../ui/PrimaryButton'

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.textContainer}>{children}</Text>
		</View>
	)
}

export default NumberContainer

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	container: {
		borderWidth: deviceWidth < 380 ? 3 : 4,
		borderColor: Colors.accent500,
		padding: deviceWidth < 380 ? 16 : 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
		margin: deviceWidth < 380 ? 30 : 40,
		width: deviceWidth < 380 ? '30%' : '35%',
	},
	textContainer: {
		fontFamily: 'open-sans-bold',
		fontSize: deviceWidth < 380 ? 18 : 24,
		color: 'black',
		textAlign: 'center',
	},
})
