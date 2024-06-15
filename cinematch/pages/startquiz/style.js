import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    backgroundColor: '#2A0140',
    padding: 20,
  },
  mainContainer: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    marginTop:'-15%'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  title: {
    color: '#F45B69',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  startButton: {
    backgroundColor: '#8D2456',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#F45B69',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;