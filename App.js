import React, { useEffect, useRef } from "react";
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Estilos from "./src/estilos/Estilos";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/app/Login";
import Sobre from "./src/app/Sobre";
import CatalogoVinhos from "./src/app/CatalogoVinhos";
import VinhoTinto from "./src/app/VinhoTinto";
import VinhoBranco from "./src/app/Tela_Vinho_Branco";
import VinhoRose from "./src/app/Tela_Vinho_Rose";
import VinhoDessert from "./src/app/VinhoDessert";

import DetalhesTinto4 from "./src/app/DetalhesTinto4";
import DetalhesTinto5 from "./src/app/DetalhesTinto5";
import DetalhesTinto6 from "./src/app/DetalhesTinto6";
import PedidoEfetuado from "./src/app/PedidoEfetuado";

import DetalhesVB1 from "./src/app/DetalhesVinhoBranco1";
import DetalhesVB2 from "./src/app/DetalhesVinhoBranco2";
import DetalhesVB3 from "./src/app/DetalhesVinhoBranco3";
import DetalhesVB4 from "./src/app/DetalhesVinhoBranco4";

import DetalhesVR1 from "./src/app/DetalhesVinhoRose1";
import DetalhesVR2 from "./src/app/DetalhesVinhoRose2";
import DetalhesVR3 from "./src/app/DetalhesVinhoRose3";
import DetalhesVR4 from "./src/app/DetalhesVinhoRose4";

import DetalhesVD1 from "./src/app/DetalhesVinhoDessert1";
import DetalhesVD2 from "./src/app/DetalhesVinhoDessert2";
import DetalhesVD3 from "./src/app/DetalhesVinhoDessert3";

import PedidoVT1 from "./src/app/PedidoVT1";
import PedidoVT2 from "./src/app/PedidoVT2";
import PedidoVT3 from "./src/app/PedidoVT3";

import PedidoVB1 from "./src/app/PedidoVB1";
import PedidoVB2 from "./src/app/PedidoVB2";
import PedidoVB3 from "./src/app/PedidoVB3";
import PedidoVB4 from "./src/app/PedidoVB4";

import PedidoVR1 from "./src/app/PedidoVR1";
import PedidoVR2 from "./src/app/PedidoVR2";
import PedidoVR3 from "./src/app/PedidoVR3";
import PedidoVR4 from "./src/app/PedidoVR4";

import PedidoVD1 from "./src/app/PedidoVD1";
import PedidoVD2 from "./src/app/PedidoVD2";
import PedidoVD3 from "./src/app/PedidoVD3";

import Maps from "./src/app/Maps";

const Stack = createNativeStackNavigator();

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const Main = ({navigation}) => (
  <View style={Estilos.appContainer}>
    <ImageBackground source={require("./src/imagens/background.jpg")}
      resizeMode="cover" style={Estilos.appImage} imageStyle={{opacity: 0.3}}>
      <FadeInView style={Estilos.appFadein}>
        <Image style={Estilos.logo} source={require("./src/imagens/marvelLogo.png")} />
        <View><Text></Text></View>
        <TouchableOpacity style={Estilos.entrarButton} onPress={() => navigation.navigate("Login")}>
          <Text style={Estilos.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View><Text></Text></View>
        <TouchableOpacity style={Estilos.sobreButton} onPress={() => navigation.navigate("Sobre")}>
          <Text style={Estilos.buttonText}>Sobre</Text>
        </TouchableOpacity>
      </FadeInView>
    </ImageBackground>
  </View>
);

export default () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Main" screenOptions={
      {
        headerStyle: {
          backgroundColor: "#181212",
        },
        headerTintColor: "#fff",
      }
    }>
      <Stack.Screen name="Main" component={Main} options={{ title: "Wine - Login", headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ title: "Wine - Login" }} />
      <Stack.Screen name="CatalogoVinhos" component={CatalogoVinhos} options={
      {
        title: "Catálogo de Vinhos - Catalógo de Vinhos",
      }
    }
    />
    
    <Stack.Screen name="VinhoTinto" component={VinhoTinto} options={{ title: "Vinho Tinto" }} />
    <Stack.Screen name="VinhoBranco" component={VinhoBranco} options={{ title: "Vinho Branco" }} />
    <Stack.Screen name="VinhoRose" component={VinhoRose} options={{ title: "Vinho Rose" }} />
    <Stack.Screen name="VinhoDessert" component={VinhoDessert} options={{ title: "Vinho Dessert" }} />
    
    <Stack.Screen name="DetalhesTinto4" component={DetalhesTinto4} options={{ title: "viejo Vinedo" }} />
    <Stack.Screen name="DetalhesTinto5" component={DetalhesTinto5} options={{ title: "4 The Stress" }} />
    <Stack.Screen name="DetalhesTinto6" component={DetalhesTinto6} options={{ title: "Jacobes Chris" }} />

    <Stack.Screen name="DetalhesVinhoBranco1" component={DetalhesVB1} options={{ title: "Montrachet Grand Cru Marquis de Laguiche 2020" }} />
    <Stack.Screen name="DetalhesVinhoBranco2" component={DetalhesVB2} options={{ title: "Vinho Ornellaia Bianco IGT" }} />
    <Stack.Screen name="DetalhesVinhoBranco3" component={DetalhesVB3} options={{ title: "Bâtard-Montrachet Grand Cru 2020" }} />
    <Stack.Screen name="DetalhesVinhoBranco4" component={DetalhesVB4} options={{ title: "Louis Jadot Corton Charlemagne Grand Cru" }} />

    <Stack.Screen name="DetalhesVinhoRose1" component={DetalhesVR1} options={{ title: "Champagne Louis Roederer Cristal Rose" }} />
    <Stack.Screen name="DetalhesVinhoRose2" component={DetalhesVR2} options={{ title: "Domaines Ott Clos Mireille Coeur de Grain Rosé" }} />
    <Stack.Screen name="DetalhesVinhoRose3" component={DetalhesVR3} options={{ title: "Vinho Rosé Étoile Domaine Ott" }} />
    <Stack.Screen name="DetalhesVinhoRose4" component={DetalhesVR4} options={{ title: "G. Bertrand Clos Du Temple Rosé" }} />

    <Stack.Screen name="DetalhesVinhoDessert1" component={DetalhesVD1} options={{ title: "Chateau-D Yquem" }} />
    <Stack.Screen name="DetalhesVinhoDessert2" component={DetalhesVD2} options={{ title: "Dusha Monakha" }} />
    <Stack.Screen name="DetalhesVinhoDessert3" component={DetalhesVD3} options={{ title: "Vinedo De Los Vientos Tannat" }} />

    <Stack.Screen name="PedidoVT1" component={PedidoVT1} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVT2" component={PedidoVT2} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVT3" component={PedidoVT3} options={{ title: "Pedido" }} />

    <Stack.Screen name="PedidoVB1" component={PedidoVB1} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVB2" component={PedidoVB2} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVB3" component={PedidoVB3} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVB4" component={PedidoVB4} options={{ title: "Pedido" }} />

    <Stack.Screen name="PedidoVR1" component={PedidoVR1} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVR2" component={PedidoVR2} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVR3" component={PedidoVR3} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVR4" component={PedidoVR4} options={{ title: "Pedido" }} />

    <Stack.Screen name="PedidoVD1" component={PedidoVD1} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVD2" component={PedidoVD2} options={{ title: "Pedido" }} />
    <Stack.Screen name="PedidoVD3" component={PedidoVD3} options={{ title: "Pedido" }} />

    <Stack.Screen name="PedidoEfetuado" component={PedidoEfetuado} options={{ title: "Pedido Efetuado" }} />
    <Stack.Screen name="Sobre" component={Sobre} options={{ title: "Marvel App - Sobre" }} />

    <Stack.Screen name="Maps" component={Maps} options={{ title: "Maps" }} />
    
    </Stack.Navigator>
  </NavigationContainer>
);