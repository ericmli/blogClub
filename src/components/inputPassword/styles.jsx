import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    input:{
        width: '101%',
        height: 50,
        borderBottomWidth: 0.5,
        marginTop: 0,
        marginLeft: -2,
        textAlign:'left',
        fontSize: 20,
    },
    text:{
        fontSize: 16,
        marginTop: 20,
        color: '#2D4379',
        fontWeight: 400
    },
    containerPassword : {
      position: 'relative'
    },
    password:{
      position: 'absolute',
      padding: 10,
      left: '85%',
      fontSize: 16,
      color: '#376AED',
    }
})