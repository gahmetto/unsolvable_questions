/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = () => {
	const { textStyle, viewStyle } = styles;
	return (
			<View style={styles.viewStyle}>
		        <Text style={styles.textStyle}>Real Questions</Text>
		      </View>
		);
	};

const styles=StyleSheet.create({
	textStyle:{
		fontSize : 24,
		color : 'teal',
		fontWeight : 'bold'
	},
	viewStyle:{
		backgroundColor : '#f8f8f8',
		height : 50,
		justifyContent : 'center',
		alignItems : 'center',
		marginTop : 20,
		shadowOffset : {width : 0, height : 2},
		shadowOpacity : 0.5
	}
});

export default Header;