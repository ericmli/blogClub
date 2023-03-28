import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({

  container: {
    backgroundColor: Theme.colors.blue[40],
    width: '100%',
    height: '100%'
  },
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.white[10],
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: 40,
    paddingTop: 10
  },
  title: {
    color: Theme.colors.blue[20],
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  }
})
