import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({
  input: {
    width: '101%',
    height: 50,
    borderBottomWidth: 0.5,
    marginTop: 0,
    marginLeft: -2,
    textAlign: 'left',
    fontSize: 20
  },
  text: {
    fontSize: 16,
    marginTop: 20,
    color: Theme.colors.blue[20],
    fontWeight: 400
  },
  containerPassword: {
    position: 'relative'
  },
  password: {
    position: 'absolute',
    padding: 10,
    left: '85%',
    fontSize: 16,
    color: Theme.colors.blue[40]
  },
  error: {
    color: 'red',
    fontSize: 12
  }
})
