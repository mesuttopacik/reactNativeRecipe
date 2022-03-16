import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


const COLORS = {
    primery: '#4630EB',
    secondery: '#000020',

    succes:'#00C851',
    error: '#ff4444',

    black: '#171717',
    white: '#FFFFFF',
    background: '#EF8F1A',
};
const NAVIGATION_HEADER_OPTION = {
    headerTintColor:'#EF8F1A',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
  }

const SIZES = {
    base: 10,
    width,
    height,
}

export {SIZES, COLORS, NAVIGATION_HEADER_OPTION}