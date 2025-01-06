import { StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../../constants/colors'
function Card({ children }) {
	return <View style={styles.inputContainer}>{children}</View>
}
export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.primary800,
		marginTop: 40,
		padding: deviceWidth < 380 ? 6 : 16,
		borderRadius: 8,
		marginHorizontal: deviceWidth < 380 ? 18 : 16,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 8,
		shadowOpacity: 0.25,
	},
})
