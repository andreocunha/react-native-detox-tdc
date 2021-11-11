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
      marginBottom: 40,
      color: '#000',
    },
    input: {
      width: '80%',
      height: 44,
      padding: 8,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#000',
      marginBottom: 10,
      fontSize: 18,
    }
});

export default styles;