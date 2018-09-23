/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Footer = () => {
	const { textStyle, viewStyle } = styles;
	return (
			<View style={styles.viewStyle}>
		        <Text style={styles.textStyle}>created by gahmett</Text>
		      </View>
		);
	};

const styles=StyleSheet.create({
	textStyle:{
		fontSize : 16,
		color : 'teal'
	},
	viewStyle:{
		backgroundColor : '#f8f8f8',
		height : 30,
		justifyContent : 'center',
		alignItems : 'center',
		marginBottom : 10,
		shadowOffset : {width : 0, height : 2},
		shadowOpacity : 0.5
	}
});

export default Footer;