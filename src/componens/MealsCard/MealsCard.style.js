import { StyleSheet } from 'react-native'
import { SIZES, COLORS } from '../../../globals/Styles'

export default StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:COLORS.background,
    },
    mealImg:{
        margin:SIZES.base,
        width:SIZES.width*0.9,
        height:SIZES.height/4,
        borderRadius:15,
        overflow:'hidden',
    },
    imgText:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    }
    
})