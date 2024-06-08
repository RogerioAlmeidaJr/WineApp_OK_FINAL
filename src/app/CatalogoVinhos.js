import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";

const CatalogoVinhos = ({ navigation }) => {
  return (
    <ImageBackground source={require('../imagens/backgroundCatVinhos.jpg')} style={styles.container}>
      <Text style={styles.title}>Catálogo de Vinhos</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VinhoTinto')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/tinto.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>Vinhos Tinto</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VinhoBranco')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/branco.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>Vinhos Branco</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VinhoRose')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/rose.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>Vinhos Rosé</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VinhoDessert')}>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Image source={require('../../assets/desset.png')} style={styles.wineImage} />
            <Text style={styles.wineText}>Vinhos Dessert</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
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

export default CatalogoVinhos;