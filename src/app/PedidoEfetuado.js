import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet} from 'react-native';

const PedidoEfetuado = () => {
  return (
    <View>
      <Text>Pedido Efetuado Screen</Text>
            <ImageBackground source={require('../../assets/pedido_ok.png')} style={styles.container}>
        <Text style={styles.title}>Pedido efetuado com sucesso</Text>
        <TouchableOpacity>
          <View style={styles.wineButton}>
            <View style={styles.opacityBackground} />
            <Text style={styles.wineText}>Seu pedido está sendo preparado pela nossa equipe de sommelieres.
            em seguida o enviaremos até sua residência. Aprecie.</Text>
          </View>
        </TouchableOpacity>
                    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

});

export default PedidoEfetuado;