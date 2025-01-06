import {
	Image,
	View,
	StyleSheet,
	Text,
	Dimensions,
	useWindowDimensions,
	ScrollView,
} from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'
function GameOverScreen({ rounds, userNumber, onNewGame }) {
	const { width, height } = useWindowDimensions()

	let imageSize = 200

	if (width < 380) {
		imageSize = 150
	}
	if (height < 400) {
		imageSize = 150
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	}

	return (
		<ScrollView style={styles.screen}>
			<View style={styles.rootContainer}>
				<Title>Game Over!!</Title>
				<View style={[styles.ImageContainer, imageStyle]}>
					<Image
						style={styles.Image}
						source={require('../assets/images/success.png')}
					/>
				</View>

				<Text style={styles.outerTextContainer}>
					your phone needs{' '}
					<Text style={styles.InnerTextContainer}>{rounds}</Text> rounds to
					guess the number{' '}
					<Text style={styles.InnerTextContainer}>{userNumber}</Text>
				</Text>
				<PrimaryButton onPress={onNewGame}>Start new Game</PrimaryButton>
			</View>
		</ScrollView>
	)
}
export default GameOverScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
	},
	ImageContainer: {
		// width: deviceWidth < 380 ? 150 : 200,
		// height: deviceWidth < 380 ? 150 : 200,
		//borderRadius: deviceWidth < 380 ? 75 : 100,
		borderWidth: 2,
		borderColor: Colors.primary500,
		overflow: 'hidden',
		margin: 36,
	},
	Image: {
		width: '100%',
		height: '100%',
	},
	outerTextContainer: {
		fontFamily: 'open-sans',
		fontSize: 20,
		margin: 20,
		textAlign: 'center',
	},
	InnerTextContainer: {
		fontFamily: 'open-sans-bold',
		color: Colors.primary500,
	},
})
