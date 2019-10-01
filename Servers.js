import React from 'react'
import {
    Picker
} from 'react-native'

const Server = (props) => {
    if(props.region === 'NA') {
        return (
            <Picker
                selectedValue={props.server}
                style={{height: 50, flex: Platform.OS === 'ios' ? 1 : null,
                width: Platform.OS === 'ios' ? undefined : 175}}
                onValueChange={(itemValue) => 
                    props.getServer(itemValue)
                }>
                <Picker.Item label="Adamantoise" value="Adamantoise" />
                <Picker.Item label="Cactuar" value="Cactuar" />
                <Picker.Item label="Faerie" value="Faerie" />
                <Picker.Item label="Gilgamesh" value="Gilgamesh" />
                <Picker.Item label="Jenova" value="Jenova" />
                <Picker.Item label="Midgardsormr" value="Midgardsormr" />
                <Picker.Item label="Sargatanas" value="Sargatanas" />
                <Picker.Item label="Siren" value="Siren" />
                <Picker.Item label="Behemoth" value="Behemoth" />
                <Picker.Item label="Excalibur" value="Excalibur" />
                <Picker.Item label="Exodus" value="Exodus" />
                <Picker.Item label="Famfrit" value="Famfrit" />
                <Picker.Item label="Hyperion" value="Hyperion" />
                <Picker.Item label="Lamia" value="Lamia" />
                <Picker.Item label="Leviathan" value="Leviathan" />
                <Picker.Item label="Ultros" value="Ultros" />
                <Picker.Item label="Balmung" value="Balmung" />
                <Picker.Item label="Brynhildr" value="Brynhildr" />
                <Picker.Item label="Coeurl" value="Coeurl" />
                <Picker.Item label="Diabolos" value="Diabolos" />
                <Picker.Item label="Goblin" value="Goblin" />
                <Picker.Item label="Malboro" value="Malboro" />
                <Picker.Item label="Mateus" value="Mateus" />
                <Picker.Item label="Zalera" value="Zalera" />
            </Picker>
        )
    }
    if(props.region === 'EU') {
        return (
            <Picker
                selectedValue={props.server}
                style={{height: 50,flex: Platform.OS === 'ios' ? 1 : null,
                width: Platform.OS === 'ios' ? undefined : 175}}
                onValueChange={(itemValue) => 
                    props.getServer(itemValue)
                }>
                <Picker.Item label="Cerberus" value="Cerberus" />
                <Picker.Item label="Louisoix" value="Louisoix" />
                <Picker.Item label="Moogle" value="Moogle" />
                <Picker.Item label="Omega" value="Omega" />
                <Picker.Item label="Ragnarok" value="Ragnarok" />
                <Picker.Item label="Spriggan" value="Spriggan" />
                <Picker.Item label="Lich" value="Lich" />
                <Picker.Item label="Odin" value="Odin" />
                <Picker.Item label="Phoenix" value="Phoenix" />
                <Picker.Item label="Shiva" value="Shiva" />
                <Picker.Item label="Twintania" value="Twintania" />
                <Picker.Item label="Zodiark" value="Zodiark" />
            </Picker>
        )
    }

}
export default Server;