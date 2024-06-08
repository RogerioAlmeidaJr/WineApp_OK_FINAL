import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#1e1c1c', // Cor de fundo preta
  },
  container: {
    // Removido flex: 1
  },
  favBtn: {
    marginTop: 20,
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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