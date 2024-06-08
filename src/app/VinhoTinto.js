import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Estilos from "../estilos/Estilos";
import Estilo from "../estilos/EstilosCatalogo"

const images = [
  require('../../assets/1_tinto.jpg'),
  require('../../assets/2_tinto.jpg'),
  require('../../assets/3_tinto.jpg'),
];

const VinhoTinto = ({ navigation }) => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={item} style={{height: '100%', width: '100%'}} resizeMode="cover" />
      </View>
    );
  };

  const screenHeight = Dimensions.get('window').height;
  const carouselHeight = screenHeight / 2;

  return (
    <ScrollView style={Estilo.background}>
      <View style={Estilo.container}>
        <Text>Vinho Tinto Screen</Text>
        <View style={{height: carouselHeight}}>
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={400} // Altere para o valor desejado
            itemWidth={300} // Altere para o valor desejado
          />
        </View>
        <Text style={Estilo.title}>Descrição</Text>
        <View style={Estilo.textContainer}>
          <Text>Como uma poesia líquida, uma cascata de rubi que acaricia os lábios e desperta os sentidos para um mundo de prazeres sensoriais, assim é uma taça da bebida grená.
          </Text>
        </View>
      </View>
      <Text style={Estilo.title}>Carta de Vinhos</Text>
      <ScrollView contentContainerStyle={Estilo.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesTinto4')}>
          <View style={Estilo.wineButton}>
            <View style={Estilo.opacityBackground} />
            <Image source={require('../../assets/4_tinto.png')} style={Estilo.wineImage} />
            <Text style={Estilo.wineText}>Viejo Vinedo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesTinto5')}>
          <View style={Estilo.wineButton}>
            <View style={Estilo.opacityBackground} />
            <Image source={require('../../assets/5_tinto.png')} style={Estilo.wineImage} />
            <Text style={Estilo.wineText}>4 The Stress</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesTinto6')}>
          <View style={Estilo.wineButton}>
            <View style={Estilo.opacityBackground} />
            <Image source={require('../../assets/6_tinto.png')} style={Estilo.wineImage} />
            <Text style={Estilo.wineText}>Jacobes Chris</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default VinhoTinto;