import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

interface resultadoParams{
	result: number,
}

function Resultado() {
	const route = useRoute()
	const params = route.params as resultadoParams;
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<View style={styles.resultadoContainer}>
				<Text style={styles.resultadoText}>Você Acertou</Text>
				<Text style={styles.resultadoTitle}>{params.result}</Text>
				<Text style={styles.resultadoText}>Questões</Text>
			</View>
			<TouchableOpacity onPress={()=>{
				navigation.navigate('Landing')
			}} style={styles.returnButton}>
				<Text style={styles.returnText}>Voltar ao Inicio</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
	resultadoContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	resultadoText: {
		fontSize: 24,
		lineHeight: 28,
		color: '#000000',
		fontFamily: 'Roboto',
	},
	resultadoTitle: {
		fontSize: 96,
		lineHeight: 112,
		color: 'rgba(113, 186, 81, 1)',
		fontFamily: 'Roboto',
	},
	returnButton: {
		backgroundColor: '#3D8EB9',
		paddingVertical: 8,
		borderRadius: 30,
		paddingHorizontal: 5,
		borderWidth: 1,
		marginBottom: 10,
		height: 100,
		width: 200,
		justifyContent:'center',
		alignItems:'center',
	},
	returnText: {
		fontSize: 26,
		lineHeight: 28,
		color: '#FFF',
		fontFamily: 'Roboto',
	},
});

export default Resultado;
