import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

interface cronometroProps {
	handleEnd: any;
}
function Cronomometro({ handleEnd }: cronometroProps) {
	const [TRS, setTRS] = useState(0);
	const [TRT, setTRT] = useState(10);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (TRS == 0) {
				if (TRT === 0) {
					// navigation.navigate('Resultado')
					handleEnd();
					return () => clearTimeout(timer);
				}
				setTRS(59);
				setTRT(TRT - 1);
			}
			if (TRS > 0) setTRS(TRS - 1);
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<View style={styles.container}>
			<Text>Tempo remanescente: </Text>
			<Text style={{ fontSize: 40 }}>
				{TRT}:{TRS < 10 ? `0${TRS}` : TRS}s
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		flexDirection: 'row',
		paddingTop: 15,
	},
});

export default Cronomometro;
