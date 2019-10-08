import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const NameClass = (props) => {
    return (
        <View>
            <View>
                <Text>{props.player}</Text>
            </View>
            <View>
                {props.class}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'darkgrey'
  }
})

export default NameClass;