import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';

const movies = [
  {id: 1, name: 'Star Wars: uma nova esperança', score: 7.5},
  {id: 2, name: 'Star Wars: a ameaça fantasma', score: 7.5},
  {id: 3, name: 'Capitão América', score: 6.5},
  {id: 4, name: 'Dr. Doolittle', score: 5.5},
  {id: 5, name: 'Cinco dias sem Maria', score: 3.5},
  {id: 6, name: 'Perdidos no oceano', score: 9.8},
  {id: 7, name: 'Lágrimas de um passado', score: 6.3},
  {id: 8, name: 'Thor: Ragnarok', score: 2.5},
  {id: 9, name: 'Capitão América: soldado invernal', score: 8.5},
  {id: 10, name: 'Captã Marvel', score: 7.5},
  {id: 11, name: 'Shinobi', score: 7.5},
  {id: 12, name: 'mathew e Clark', score: 7.5},
  {id: 13, name: 'Superman vs Destructor', score: 6.5},
  {id: 14, name: 'Dr. Shipoppi', score: 5.5},
  {id: 15, name: 'João e Maria: caçadores de bruxas', score: 3.5},
  {id: 16, name: 'Sete noites sem Advil', score: 9.8},
  {id: 17, name: 'Men is ahead', score: 6.3},
  {id: 18, name: 'Shaft', score: 2.5},
  {id: 19, name: 'Sem tíulo', score: 8.5},
];

export const Movie = props => (
  <View style={itemEstilo}>
    <Text>Name: {props.name}</Text>
    <Text style={{fontWeight: 'bold'}}>Score: {props.score}</Text>
  </View>
);

export default props => {
  const renderItems = ({item}) => {
    return <Movie {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={movies}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',

  //Flex Properties
  alignItems: 'center', //Property that works on flex-box's cross-axis
  justifyContent: 'center', //Property that works on flex-box's main-axis
};
