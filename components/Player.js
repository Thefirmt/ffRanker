import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import NameClass from './NameClass.js';

const PlayerList = (props) => {
    return(
        <View>
        {props.players.map(players, i => {
            <NameClass player={player.name} class={player.class} />
        })}
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

export default PlayerList;