/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import Content from './src/components/Content';
import Footer from './src/components/Footer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
      <Header/>
      <Content/>
      <Footer/>
      </View>
    );
  }
}
