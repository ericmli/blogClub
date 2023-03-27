import {StyleSheet} from 'react-native'
import { Theme } from '../../theme/Theme'

export default StyleSheet.create({

    container:{
        width: '100%',

        paddingTop: 30
    },
    textName:{
        fontSize: 16,
        color: Theme.colors.blue[20]
    },
    containerNameIcon :{
        display : 'flex',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        width: '80%',       
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    iconTop: {
        right: 0
    },
    textTop:{
        fontSize: 10,
        position: 'absolute',
        backgroundColor: "#EB4C42",
        borderRadius: 50,
        width: 15,
        height: 15,
        textAlign: 'center',
        left: 5
    },
    flatStyle:{
        position: 'relative',
        width: '100%',
    },
    containerList:{
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginLeft: 0,
        zIndex: 99,
    },
    imageList:{
        width: 54,
        height: 54,
        borderRadius: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    border : {
        position: 'relative',
        borderWidth: 2,
        borderColor: '#49B0E2' ,
        height: 68,
        width: 68,
        borderRadius: 20,
    },
    textList:{
        position: 'absolute',
        bottom: 0,
        flexWrap: 'wrap',
        fontSize: 12,
        color: Theme.colors.blue[20],
    },
    iconList:{ position: 'absolute', 
        right: 0, 
        bottom: 0 , 
        backgroundColor: '#FF7067',
        borderRadius: 50,
        width: 20,
        height: 20,
        textAlign: 'center',

    }
})