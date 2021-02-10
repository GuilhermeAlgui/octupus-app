import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

function Landing() {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Quiz de História Enem</Text>
			<Text style={styles.instructions}>
				Será feito um Quiz de 15 questões do ENEM sobre história com maior foco
				na história do Brasil.
				{'\n'}Deverá ser feito em 10 minutos, será exibido seu número de acertos
				ao termino.
				{'\n'}Utilize os botões disponibilizados para prosseguir ou voltar em
				uma questão.
				{'\n'}Cada questão possui 5 alternativas.
			</Text>

			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Pergunta');
				}}
				style={styles.button}>
				<Text style={styles.buttonText}>Iniciar</Text>
			</TouchableOpacity>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingHorizontal: 30,
	},

	title: {
		fontSize: 48,
		textAlign: 'center',
	},
	instructions: {
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 14,
		lineHeight: 16,
		textAlign: 'center',
		color: '#000000',
	},
	button: {
		backgroundColor: '#3D8EB9',
		height: 48,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 30,
	},
	buttonText: {
		color: '#FFF',
	},
});

export default Landing;
