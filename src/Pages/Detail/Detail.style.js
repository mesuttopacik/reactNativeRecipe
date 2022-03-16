import { StyleSheet } from 'react-native'
import {COLORS, SIZES} from '../../../globals/Styles'


export default StyleSheet.create({
container:{
backgroundColor:'#e3e3e3',
},
mealImage:{
    width:SIZES.width,
    minHeight:200
},
title:{
    fontSize:22,
    color:'#b71c1c',
    fontWeight:'bold',
},
subTitle:{
    fontSize:18,
    color:'#b71c1c',
    fontWeight:'600'
},
textContainer:{
margin:10
},
divider:{
    borderColor:'#b71c1c',
    borderWidth:1,
    marginVertical:10,
},
recipe:{
    fontWeight:'500',
    color:COLORS.black,
},
youtubeButton:{
    borderRadius:15,
    marginTop:15,
    margin:30,
    alignItems:'center',
    backgroundColor:'red',
},
youtebeLinkText:{
    fontWeight:'bold',
    fontSize:18,
    color:COLORS.white,
    padding:13
}
})