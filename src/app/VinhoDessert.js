import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Estilos from "../estilos/Estilos";

const images = [
  require('../../assets/Chateau-DYquem.jpg'),
  require('../../assets/DushaMonakha.jpg'),
  require('../../assets/VinedoDeLosVientosTannat.jpg'),
];

const VinhoDessert = ({ navigation }) => {
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
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Text>Vinho Dessert Screen</Text>
        <View style={{height: carouselHeight}}>
          <Carousel
            data={images}
            renderItem={renderItem}
            sliderWidth={400} // Altere para o valor desejado
            itemWidth={300} // Altere para o valor desejado
          />
        </View>
        <Text style={styles.title}>Descrição</Text>
        <View style={styles.textContainer}>
          <Text>Dessert wine, também conhecido como vinho de sobremesa, é um tipo de vinho doce que é tradicionalmente servido após a refeição, acompanhando sobremesas ou queijos. Este tipo de vinho é conhecido por sua doçura e riqueza de sabor, que o torna uma escolha popular para finalizar uma refeição de forma elegante.
          </Text>
        </View>
      </View>
      <Text style={styles.title}>Carta de Vinhos</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesVinhoDessert1')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/Chateau-DYquem.jpg')} style={styles.wineImage} />
            <Text style={styles.wineText}>Chateau-D Yquem</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesVinhoDessert2')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/DushaMonakha.jpg')} style={styles.wineImage} />
            <Text style={styles.wineText}>Dusha Monakha</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesVinhoDessert3')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/VinedoDeLosVientosTannat.jpg')} style={styles.wineImage} />
            <Text style={styles.wineText}>Vinedo De Los Vientos Tannat</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1e1c1c', // Cor de fundo preta
  },
  container: {
    // Removido flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Cor de fundo branca com 50% de opacidade
    borderRadius: 10, // Bordas arredondadas
    padding: 10, // Espaçamento interno
    marginHorizontal: 35, // Adiciona margens laterais
    marginBottom: 20, // Adiciona margem inferior
  },
   wineButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  opacityBackground: {
    backgroundColor: 'rgba(240, 240, 240, 0.5)', // Adiciona 50% de opacidade
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
   wineImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  wineText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VinhoDessert;