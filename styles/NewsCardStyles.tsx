import { StyleSheet } from 'react-native';

const NewsCardStyle = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
          width: 0.5,
          height: 0.5, 
      },
      shadowOpacity: 0.5,
      shadowRadius: 3,

  },
  title: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
  }, 
  description: {
      color: 'gray',
      fontSize: 18,
  },
  image: {
      justifyContent: 'center',
  },
  author: {
      fontSize: 15,
      color: 'gray',
  },
})

export default NewsCardStyle;