import React, {useState} from 'react';
import {View, Button, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const PedidoVD2 = ({ navigation }) => {

  const MENSAGEM_PE = "Pedido efetuado!";
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(147.00);

  const alteraValores = () => {
    setTotal(total + 147.00);
    setCount(count + 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.opacityBackground} />
      <Image source={require('../../assets/DushaMonakha.jpg')} style={styles.wineImage} />
      <Text style={styles.wineText}>Dusha Monakha</Text>
      <Text style={styles.wineText}></Text>
      <Button onPress={() => alteraValores()} title="Adicionar" />
      <Text style={styles.wineText}></Text>
      <Text style={styles.wineText}>Quantidade: {count}</Text>
      <Text style={styles.wineText}>Total: R$ {total}</Text>
      <Text style={styles.wineText}></Text>
     <Button onPress={() => navigation.navigate('Maps')} title="FINALIZAR PEDIDO!" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default PedidoVD2;