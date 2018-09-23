/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class Content extends Component{

	componentWillMount(){
		console.log('willMount');
	}

	componentDidMount(){
		console.log('didMount');
	}

	render(){
		console.log('render');
		return(
				<View style={{marginTop : 15, alignItems : 'center'}}>
					<Text style={{color : 'brown'}}> Çözülemeyen sorularınızı paylaşınız </Text>
				</View>
			);
	}
}


export default Content;