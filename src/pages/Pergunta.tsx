import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import questions from '../questions/questions';

// import { Container } from './styles';

function Pergunta() {
	const { navigate } = useNavigation();

	const [perguntas, setPerguntas] = useState([...questions]);
	const [questao, setQuestao] = useState(0);
	//const [teste, setTeste] = useState('');

	function handleResult() {
		let result = 0;
		perguntas.forEach((pergunta) => {
			if (pergunta.alternativa === pergunta.correta) result++;
		});
		navigate('Resultado', { result });
	}

	return (
		<ScrollView style={styles.container}>
			<Image
				style={styles.image}
				source={{
					uri: perguntas[questao].imagem,
				}}
			/>
			<Text style={styles.perguntaText}>{perguntas[questao].pergunta}</Text>
			<ScrollView style={styles.perguntaContainer}>
				<TouchableOpacity
					onPress={() => {
						const q = perguntas;
						q[questao].alternativa = 'a';
						setPerguntas([...q]);
					}}
					style={
						perguntas[questao].alternativa !== 'a'
							? styles.perguntaButton
							: styles.perguntaButtonRes
					}>
					<Text style={styles.pergunta}>
						{perguntas[questao].questoes[0].texto}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						const q = perguntas;
						q[questao].alternativa = 'b';
						setPerguntas([...q]);
					}}
					style={
						perguntas[questao].alternativa !== 'b'
							? styles.perguntaButton
							: styles.perguntaButtonRes
					}>
					<Text style={styles.pergunta}>
						{perguntas[questao].questoes[1].texto}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						const q = perguntas;
						q[questao].alternativa = 'c';
						setPerguntas([...q]);
					}}
					style={
						perguntas[questao].alternativa !== 'c'
							? styles.perguntaButton
							: styles.perguntaButtonRes
					}>
					<Text style={styles.pergunta}>
						{perguntas[questao].questoes[2].texto}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						const q = perguntas;
						q[questao].alternativa = 'd';
						setPerguntas([...q]);
					}}
					style={
						perguntas[questao].alternativa !== 'd'
							? styles.perguntaButton
							: styles.perguntaButtonRes
					}>
					<Text style={styles.pergunta}>
						{perguntas[questao].questoes[3].texto}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						const q = perguntas;
						q[questao].alternativa = 'e';
						setPerguntas([...q]);
					}}
					style={
						perguntas[questao].alternativa !== 'e'
							? styles.perguntaButton
							: styles.perguntaButtonRes
					}>
					<Text style={styles.pergunta}>
						{perguntas[questao].questoes[4].texto}
					</Text>
				</TouchableOpacity>
			</ScrollView>
			<View style={styles.orderContainer}>
				{questao !== 0 ? (
					<TouchableOpacity
						onPress={() => {
							setQuestao(questao - 1);
						}}
						style={styles.orderButton}>
						<Text style={styles.orderButtonText}>Anterior</Text>
					</TouchableOpacity>
				) : (
					<View />
				)}

				{questao !== 14 ? (
					<TouchableOpacity
						onPress={() => {
							setQuestao(questao + 1);
						}}
						style={styles.orderButton}>
						<Text style={styles.orderButtonText}>Proximo</Text>
					</TouchableOpacity>
				) : (
					<TouchableOpacity onPress={handleResult} style={styles.orderButton}>
						<Text style={styles.orderButtonText}>Finalizar</Text>
					</TouchableOpacity>
				)}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		//alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	image: {
		width: Dimensions.get('window').width * 0.8,
		height: Dimensions.get('window').width * 0.6,
		marginTop: Dimensions.get('window').height * 0.06,
		marginHorizontal: Dimensions.get('window').width * 0.1,
	},
	perguntaText: {
		textAlign: 'left',
		fontSize: 16,
		lineHeight: 18,
		color: '#000000',
		fontFamily: 'Roboto',
		//marginHorizontal: Dimensions.get('window').width * 0.1,
	},
	perguntaContainer: {
		marginTop: 10,
		//justifyContent: 'space-evenly',
		flex: 1,
		paddingHorizontal: Dimensions.get('window').width * 0.1,
	},
	perguntaButton: {
		backgroundColor: '#3D8EB9',
		paddingVertical: 8,
		borderRadius: 30,
		paddingHorizontal: 5,
		borderWidth: 1,
		marginBottom: 10,
	},
	perguntaButtonRes: {
		backgroundColor: '#90EE90',
		paddingVertical: 8,
		borderRadius: 30,
		paddingHorizontal: 5,
		borderWidth: 1,
		marginBottom: 10,
	},
	pergunta: {
		fontSize: 16,
		lineHeight: 18,
		color: '#FFF',
		fontFamily: 'Roboto',
	},
	orderContainer: {
		flexDirection: 'row',
		marginHorizontal: Dimensions.get('window').width * 0.1,
		justifyContent: 'space-between',
	},
	orderButton: {
		backgroundColor: '#F00',
		paddingVertical: 12,
		borderRadius: 30,
		paddingHorizontal: 20,
		borderWidth: 1,
		marginBottom: 10,
	},
	orderButtonText: {
		color: '#fff',
	},
});

export default Pergunta;
