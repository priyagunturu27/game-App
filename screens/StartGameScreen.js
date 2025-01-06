import { useState } from 'react'
import {
	View,
	TextInput,
	StyleSheet,
	Alert,
	Dimensions,
	useWindowDimensions,
	ScrollView,
	KeyboardAvoidingView,
} from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

function StartGameScreen({ onPick }) {
	const [enteredNumber, setEnteredNumber] = useState('')
	const { width, height } = useWindowDimensions()
	function inputHandler(input) {
		setEnteredNumber(input)
	}
	function resetHandler() {
		setEnteredNumber('')
	}
	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber)
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid Number!!', 'Enter number between 0 and 99', [
				{ text: 'okay', style: 'default', onPress: resetHandler },
			])
			return
		}
		onPick(chosenNumber)
	}

	const marginTopDistance = height < 380 ? 20 : 70
	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView
				style={styles.screen}
				behavior='position'>
				<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>Enter a number</InstructionText>
						<TextInput
							style={styles.numberInput}
							maxLength={2}
							keyboardType='number-pad'
							value={enteredNumber}
							onChangeText={inputHandler}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttons}>
								<PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
							</View>
							<View style={styles.buttons}>
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	)
}

export default StartGameScreen

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		alignItems: 'center',
	},

	numberInput: {
		fontSize: 32,
		color: Colors.accent500,
		borderBottomWidth: 2,
		borderBottomColor: Colors.accent500,
		marginVertical: 8,
		textAlign: 'center',
		fontWeight: 'bold',
		width: 50,
		height: 50,
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	buttons: {
		flex: 1,
	},
})
