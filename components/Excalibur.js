import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import PlayerList from './PlayerList.js';

class Excalibur extends Component {
    constructor(props) {
        super(props)

        this.state = {
            players : []
            loading : true;
        }
    }

//65, 66, 67, 68 Eden Prime

    searchForStats() {
    fetch(`https://www.fflogs.com:443/v1/rankings/character/${this.state.character}/${this.state.server}/${this.state.region}?api_key=${key}`)
    .then(response => response.json())
    .then((responseJson)=> {
            console.log(responseJson)  //do some magic to turn data into Player { player: 'name', class: 'class'}
            //set magic list of players as an array in state to pass down to all components of server.
      this.setState({
        loading: false,
      })
      console.log(this.state)
    })
    .catch(error=>console.log(error)) //to catch the errors if any
  }

    componentDidMount() {
        searchForStats();
    }

    render() {

        if(this.state.loading) {
            return (
                <View>
                <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }

        return(
            <View>
                <Text> TOP 10 PLAYERS </Text>
                <PlayerList players={this.state.players} />
            </View>
        )
    }
}

export default Excalibur;


//    {
//       "name": "Elica Morganite",
//       "class": 1,
//       "spec": 3,
//       "total": 15364.3,
//       "duration": 783531,
//       "startTime": 1569377615109,
//       "fightID": 8,
//       "reportID": "Y97TbCHzJqZ8RVxB",
//       "guildName": "Third Party Tools",
//       "serverName": "Excalibur",
//       "regionName": "NA",
//       "hidden": false,
//       "patch": 5,
//       "other_per_second_amount": 14984.1,
//       "raw_dps": 15364.345507708056,
//       "exploit": 0
//     }