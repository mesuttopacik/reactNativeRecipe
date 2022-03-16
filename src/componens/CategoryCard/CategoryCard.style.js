import { StyleSheet } from 'react-native'
import {SIZES, COLORS}  from '../../../globals/Styles'

export default StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        padding:15,
        width: SIZES.width*0.96,
        flexDirection:'row',
        borderWidth:1,
        borderTopLeftRadius:45,
        borderBottomLeftRadius:45,
        marginVertical:3,
        alignItems:'center',
    },
    categoryText:{
        fontSize:22,
    },
    mealImg: {
        marginHorizontal:10,
        width:56,
        height:56,
        borderRadius:28,
        shadowColor:COLORS.black,
        shadowOpacity:100,
        shadowOffset:{width:2,height:2},
        shadowRadius:28,
    }
})