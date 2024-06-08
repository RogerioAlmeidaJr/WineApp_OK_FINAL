import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Estilos from "../estilos/Estilos";

const images = [
  require('../../assets/Champagne_Louis_Roederer_Cristal_Rose.png'),
  require('../../assets/Domaines_Ott_Clos_Mireille_Coeur_de_Grain_Rose.png'),
  require('../../assets/Vinho_Rose_Etoile_Domaine_Ott.png'),
  require('../../assets/G_Bertrand_Clos_Du_Temple_Rose.png'),
];

const VinhoRose = ({ navigation }) => {
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
        <Text>Vinho Rose Screen</Text>
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
          <Text>O O vinho rosé destaca-se por sua coloração rosa, que varia de pálido a vibrante. é produzido a partir de uvas tintas. É geralmente frutado e refrescante, com notas de morango, framboesa e flores.
          </Text>
        </View>
      </View>
      <Text style={styles.title}>Carta de Vinhos</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesVinhoRose1')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/Champagne_Louis_Roederer_Cristal_Rose.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>Champagne Louis Roederer Cristal Rose</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesVinhoRose2')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/Domaines_Ott_Clos_Mireille_Coeur_de_Grain_Rose.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>Domaines Ott Clos Mireille Coeur de Grain Rosé</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesVinhoRose3')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/Vinho_Rose_Etoile_Domaine_Ott.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>Vinho Rosé Étoile Domaine Ott</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('DetalhesVinhoRose4')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/G_Bertrand_Clos_Du_Temple_Rose.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>G. Bertrand Clos Du Temple Rosé</Text>
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

export default VinhoRose;