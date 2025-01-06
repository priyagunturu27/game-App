import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import Colors from './constants/colors'
export default function App() {
	const [userNumber, setUserNumber] = useState()
	const [gameIsOver, setGameIsOver] = useState(true)
	const [guessRounds, setGuessRounds] = useState(0)
	const [fontLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	})
	if (!fontLoaded) {
		return <AppLoading />
	}

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber)
		setGameIsOver(false)
	}
	function gameOverHandler(rounds) {
		setGameIsOver(true)
		setGuessRounds(rounds)
	}
	function startNewGameHandler() {
		setUserNumber(null)
	}

	let screen = <StartGameScreen onPick={pickedNumberHandler} />
	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
			/>
		)
	}
	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen
				rounds={guessRounds}
				userNumber={userNumber}
				onNewGame={startNewGameHandler}
			/>
		)
	}

	return (
		<>
			<StatusBar style='light' />
			<LinearGradient
				colors={[Colors.primary700, Colors.accent500]}
				style={styles.rootScreen}>
				<ImageBackground
					source={require('./assets/images/background.png')}
					resizeMode='cover'
					style={styles.rootScreen}
					imageStyle={styles.backgroundImage}>
					<SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
				</ImageBackground>

				<StatusBar style='light' />
			</LinearGradient>
		</>
	)
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.2,
	},
})
