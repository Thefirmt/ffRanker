import React, { Component } from 'react';
import {
  Picker,
  TextInput,
  Button,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Server from './Servers.js'
import key from './fflogConfig.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      character: "Evode Fairy",
      region: "NA",
      loading: true,
      server: "Excalibur",
      eden: null,
      edenTotal: null,
      voidwalker: null,
      voidwalkerTotal: null,
      leviathan: null,
      leviathanTotal: null,
      titan: null,
      titanTotal: null
    }

    this.getServer = this.getServer.bind(this);
  }

  getServer(serverSelected) {
    this.setState({
      server: serverSelected
    })
  }


  searchForStats() {
    fetch(`https://www.fflogs.com:443/v1/rankings/character/${this.state.character}/${this.state.server}/${this.state.region}?api_key=${key}`)
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        eden: null,
        edenTotal: null,
        voidwalker: null,
        voidwalkerTotal: null,
        leviathan: null,
        leviathanTotal: null,
        titan: null,
        titanTotal: null
      })
      for (var f = 0; f < responseJson.length; f++) {
        if(responseJson[f].encounterName === "Eden Prime") {
          if(!this.state.eden) {
            this.setState({
              eden: responseJson[f].rank,
              edenTotal: responseJson[f].outOf
            })
          } else {
            if(responseJson[f].rank < this.state.eden) {
              this.setState({
                eden: responseJson[f].rank,
                edenTotal: responseJson[f].outOf
              })
            }
          }
        }
        if(responseJson[f].encounterName === "Voidwalker") {
          if(!this.voidwalker) {
            this.setState({
              voidwalker: responseJson[f].rank,
              voidwalkerTotal: responseJson[f].outOf
            })
          } else {
            if(responseJson[f].rank < this.vvoidwalker) {
              this.setState({
                voidwalker: responseJson[f].rank,
                voidwalkerTotal: responseJson[f].outOf
            })
            }
          }
        }
        if(responseJson[f].encounterName === "Leviathan") {
          if(!this.l) {
            this.setState({
              leviathan: responseJson[f].rank,
              leviathanTotal: responseJson[f].outOf
            })
          } else {
            if(responseJson[f].rank < this.l.rank) {
              this.setState({
                leviathan: responseJson[f].rank,
                leviathanTotal: responseJson[f].outOf
              })
            }
          }
        }
        if(responseJson[f].encounterName === "Titan") {
          if(!this.t) {
            this.setState({
              titan: responseJson[f].rank,
              titanTotal: responseJson[f].outOf
            })
          } else {
            if(responseJson[f].rank < this.t.rank) {
              this.setState({
                titan: responseJson[f].rank,
                titanTotal: responseJson[f].outOf
            })
            }
          }
        }
      }
      this.setState({
        loading: false,
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
  }

  componentDidMount() {
    this.searchForStats()
  }

  render() {

    if(this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
      <>
        <View
        style={styles.view}>
          <TextInput style={styles.input} placeholder='Character Name' placeholderTextColor='whitesmoke' onChangeText={(text)=> this.setState({character : text})}></TextInput>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Picker
              selectedValue={this.state.region}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue) =>
                this.setState({region: itemValue})
              }>
              <Picker.Item label="NA" value="NA" />
              <Picker.Item label="EU" value="EU" />
            </Picker>
              <Server getServer={this.getServer} server={this.state.server} region={this.state.region}/>
          </View>
          <Button
            title="Search FFlogs"
            color="grey"
            onPress={() => this.searchForStats()}
          />
        <View >
          <View 
            style={styles.data}>
            <Text style={styles.name}>{this.state.character}</Text>
          </View>
          <View 
            style={styles.ranking}>
            <Text style={styles.innerRank}>{this.state.eden}</Text>
            <View
              style={styles.center}>
              <Text style={styles.total}>/{this.state.edenTotal}</Text>
          <Text style={styles.boss}>Eden Prime</Text>
            </View>
          </View>
          <View 
            style={styles.ranking}>
            <Text style={styles.innerRank}>{this.state.voidwalker}</Text>
            <View
              style={styles.center}>
                <Text style={styles.total}>/{this.state.voidwalkerTotal}</Text>
          <Text style={styles.boss}>Voidwalker</Text>
            </View>
          </View>
          <View 
            style={styles.ranking}>
            <Text style={styles.innerRank}>{this.state.leviathan}</Text>
            <View
              style={styles.center}>
              <Text style={styles.total}>/{this.state.leviathanTotal}</Text>
          <Text style={styles.boss}>Leviathan</Text>
            </View>
          </View>
          <View 
            style={styles.ranking}>
              <Text style={styles.innerRank}>{this.state.titan}</Text>
              <View
              style={styles.center}>
                <Text style={styles.total}>/{this.state.titanTotal}</Text>
          <Text style={styles.boss}>Titan</Text>
              </View>
          </View>
          <View 
            style={styles.ranking}>
            <Text style={styles.innerRank}>dummydiv</Text>
            <Text style={styles.total}>/dummydiv}</Text>
          </View>
        </View>
      </View>

    </>
    );
  }
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'darkgrey'
  },
  data: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(57, 65, 82)',
    width: 350,
    borderRadius: 10
  },
  input: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: 'grey',
    color: 'white',
    width: 275,
    borderRadius: 10
  },
  name: {
    fontSize: 20,
    color: 'white'
  },
  ranking: {
    flex: 3,
    textAlign: 'right',
    backgroundColor: 'rgb(56, 57, 59)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'darkgrey',
    borderWidth: 4,
    borderRadius: 10
  },
  innerRank: {
    fontSize: 50,
    color: 'gold',
  },
  total: {
    textAlign: 'left',
    color: 'purple',
    fontSize: 20,
  },
  boss: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'whitesmoke',
  },
  center: {
  }
});

export default App;