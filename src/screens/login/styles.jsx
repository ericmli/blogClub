import {StyleSheet} from 'react-native'
import { theme } from '../../theme'

export default StyleSheet.create({

      container:{
        backgroundColor: '#376AED',
        width: '100%',
        height: '100%',
        
      },
      body:{
        height:'100%',
        width: '100%',
        backgroundColor:'#FFF',
        borderRadius: 40,
        padding: 40
      },
      title:{
        color:'#252525',
        fontSize: 24,
        fontWeight:'bold',
        marginBottom: 10
      },
      containerReset:{
        flexDirection: 'row',
        gap: 8,
        marginRight: 'auto',
        marginLeft: 'auto',
      },
      textReset:{
        color: '#376AED',

      },
      containerLogin:{
        marginTop: 40,
        width: '100%',
        margin: 'auto',
        alignItems: 'center'
      },
      loginSocial:{
        marginTop: 20,
        flexDirection: 'row',
        gap: 40
      }

})