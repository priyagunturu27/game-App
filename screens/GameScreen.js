import { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Alert,
	FlatList,
	Dimensions,
	useWindowDimensions,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import GameLogs from '../components/game/GameLogs'

function generateRandomNumber(min, max, exclude) {
	let ranNum = Math.floor(Math.random() * (max - min)) + min
	if (ranNum === exclude) {
		return generateRandomNumber(min, max, exclude)
	} else {
		return ranNum
	}
}
let minBoundary = 1
let maxBoundary = 100
function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomNumber(1, 100, userNumber)
	const [currentGuess, setCurrentGuess] = useState(initialGuess)
	const [guessRounds, setGuessRounds] = useState([initialGuess])
	const { width, height } = useWindowDimensions()
	console.log(minBoundary, maxBoundary)
	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length)
		}
	}, [currentGuess, userNumber, onGameOver])

	useEffect(() => {
		;(minBoundary = 1), (maxBoundary = 100)
	}, [])
	function nextGuessHandler(direction) {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert('Don not lie!!', 'you know that is wrong', [
				{ text: 'sorry', style: 'cancel' },
			])
			return
		}
		if (direction === 'lower') {
			maxBoundary = currentGuess
		} else {
			minBoundary = currentGuess + 1
		}
		const newRnNumber = generateRandomNumber(
			minBoundary,
			maxBoundary,
			currentGuess
		)
		setCurrentGuess(newRnNumber)
		setGuessRounds((prevRnds) => [newRnNumber, ...prevRnds])
	}
	let guessRoundLength = guessRounds.length
	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<InstructionText style={styles.instructionText}>
					Higher or Lower
				</InstructionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttons}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
							<Ionicons
								name='add'
								size={24}
								color='white'
							/>
						</PrimaryButton>
					</View>

					<View style={styles.buttons}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
							<Ionicons
								name='remove'
								size={24}
								color='white'
							/>
						</PrimaryButton>
					</View>
				</View>
			</Card>
		</>
	)
	if (width > 400) {
		content = (
			<>
				<View style={styles.buttonsWidthContainer}>
					<View style={styles.buttons}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
							<Ionicons
								name='add'
								size={24}
								color='white'
							/>
						</PrimaryButton>
					</View>
					<NumberContainer>{currentGuess}</NumberContainer>
					<View style={styles.buttons}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
							<Ionicons
								name='remove'
								size={24}
								color='white'
							/>
						</PrimaryButton>
					</View>
				</View>
			</>
		)
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			{content}
			<View style={styles.listContainer}>
				{/* {guessRounds.map((guessNum) => (
					<Text key={guessNum}>{guessNum}</Text>
				))} */}
				<FlatList
					data={guessRounds}
					renderItem={({ item, index }) => (
						<GameLogs
							guess={item}
							rounds={guessRoundLength - index}
						/>
					)}
					keyExtractor={(item) => item}></FlatList>
			</View>
		</View>
	)
}
export default GameScreen

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
	},
	instructionText: {
		marginBottom: deviceWidth < 380 ? 0 : 8,
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	buttons: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		padding: 16,
	},
	buttonsWidthContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
})
