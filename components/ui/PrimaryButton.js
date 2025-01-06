import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'
function PrimaryButton({ children, onPress }) {
	return (
		<View style={styles.outerButtonContainer}>
			<Pressable
				style={({ pressed }) =>
					pressed
						? [styles.pressed, styles.innerButtonContainer]
						: styles.innerButtonContainer
				}
				onPress={onPress}
				android_ripple={{ color: Colors.primary600 }}>
				<Text style={styles.buttonTextContainer}>{children}</Text>
			</Pressable>
		</View>
	)
}

export default PrimaryButton

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	outerButtonContainer: {
		margin: deviceWidth < 380 ? 2 : 4,
		overflow: 'hidden',
		borderRadius: 24,
	},
	innerButtonContainer: {
		backgroundColor: Colors.primary500,
		elevation: 4,
		padding: 4,
	},
	buttonTextContainer: {
		textAlign: 'center',
		padding: deviceWidth < 380 ? 2 : 8,
		color: 'white',
	},
	pressed: {
		opacity: 0.75,
	},
})
