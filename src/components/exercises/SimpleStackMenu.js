import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const characters = [
    { 
        name: 'Rick Sanchez',
        attribute: 'Science-God'
    },
    { 
        name: 'Morty Smith',
        attribute: 'Kind-Hearthed'
    },
    { 
        name: 'Summer Smith',
        attribute: 'Open-Minded'
    },
    { 
        name: 'Jerry Smith',
        attribute: 'Unemployed'
    },
    { 
        name: 'Beth Smith',
        attribute: 'Psichopat'
    },
]

class CharacterScreen extends React.Component {

    renderCharacterOption = (character, index) => {
        return (
            <TouchableOpacity
                key={index}
                onPress={() => this.props.navigation.navigate('CharacterDetails', { characterName: character.name, attribute: character.attribute })}
            >
                <Text>{character.name}</Text>
            </TouchableOpacity>
        );

    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen 2</Text>
            {characters.map(this.renderCharacterOption)}
        </View>
        );
    }
}

class DetailsScreen extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = props;


        this.state = {
            characterName: navigation.getParam('characterName', 'Default name'),
            attribute: navigation.getParam('attribute', 'Default attribute')
        }
    }

    renderAttribute = () => {
        return this.state.attribute.match("(a|e|i|o|u).*") 
            ? `an ${this.state.attribute}`
            : `a ${this.state.attribute}`;
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
            <Text>Here we should add any details for {this.state.characterName}'s profile</Text>
            <Text>What we known so far? {this.state.characterName} is {this.renderAttribute()}</Text>
        </View>
      );
    }
  }

const AppNavigator = createStackNavigator({
  CharacterChoice: CharacterScreen,
  CharacterDetails: DetailsScreen,
},
{
  initialRouteName: 'CharacterChoice',
});

export default createAppContainer(AppNavigator);