import React, { useState, useEffect } from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import { View, Text, TextInput, Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Maps = () => {
  const initialLocation = {
    latitude: -23.065011694471973,
    longitude: -46.927557140178685,
  };

  const MENSAGEM_PE = "Pedido Efetuado Com Sucesso!";
  const [destinationLocation, setDestinationLocation] = useState(initialLocation);
  const [cep, setCep] = useState('');
  const [streetName, setStreetName] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [deliveryOption, setDeliveryOption] = useState('Standard');

  useEffect(() => {
    if (cep.length === 8) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep},+BR&key=AhA25Y3jNhEyBBTHTNo0gEyFpXqcRZn8rSaIQZUhLuDCDcawyeJUkx3gPF1Xol1D`)
        .then(response => response.json())
        .then(data => {
          const location = data.results[0].geometry.location;
          setDestinationLocation({
            latitude: location.lat,
            longitude: location.lng,
          });
        })
        .catch(error => console.warn(error));
    }
  }, [cep]);

  const inputStyle = {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius: 10, 
    padding: 10, 
    width: '80%',
    marginBottom: 10,
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <MapView
        style={{flex: 0.5, width: '100%'}}
        initialRegion={{
          latitude: initialLocation.latitude,
          longitude: initialLocation.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        <Marker coordinate={initialLocation} title="Localização inicial" />
        <Marker coordinate={destinationLocation} title="Destino" />
        <Polyline
          coordinates={[initialLocation, destinationLocation]}
          strokeColor="#000"
          strokeWidth={3}
        />
      </MapView>

      <Text>CEP:</Text>
      <TextInput
        style={inputStyle}
        onChangeText={text => setCep(text)}
        value={cep}
        keyboardType="numeric"
      />

<Text>Nome da Rua:</Text>
      <TextInput
        style={inputStyle}
        onChangeText={text => setStreetName(text)}
        value={streetName}
      />

      <Text>Número da Rua:</Text>
      <TextInput
        style={inputStyle}
        onChangeText={text => setStreetNumber(text)}
        value={streetNumber}
        keyboardType="numeric"
      />

      <Text>Bairro:</Text>
      <TextInput
        style={inputStyle}
        onChangeText={text => setNeighborhood(text)}
        value={neighborhood}
      />

      <Text>Cidade:</Text>
      <TextInput
        style={inputStyle}
        onChangeText={text => setCity(text)}
        value={city}
      />

      <Text>Opções de Entrega:</Text>
      <RadioButton.Group onValueChange={newValue => setDeliveryOption(newValue)} value={deliveryOption}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="Premium" />
          <Text>Entrega Premium (em até 48h)</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton value="Standard" />
          <Text>Entrega Standard (em até 7 dias)</Text>
        </View>
        
      </RadioButton.Group>

      <Button onPress={() => alert(MENSAGEM_PE)} title="FINALIZAR PEDIDO!" />

    </View>
  );
};

export default Maps;