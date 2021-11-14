import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#051933',
    },
    loginArea: {
      width: '100%',
      padding: 30,
    },
    input: {
      width: '100%',
      height: 44,
      padding: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#000',
      marginBottom: 20,
      fontSize: 18,
    },
    button: {
      backgroundColor: '#051933',
      width: 100,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
    },
    textButton: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    }
});

export default styles;