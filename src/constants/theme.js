import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: '#f52d56',
    title: '#000000',
    white: '#FFFFFF',
    lightGrey: '#D3D6D6',
    grey: '#C1C0C9',
    blue: '#087BB6',
    yellow: '#F4D03F',
};

export const SIZES = {
    h1: 32,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
}


// import { Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// export const COLORS = {
//   primary: '#E60449',
//   title: '#FFFFFF',
// };

// export const SIZES = {
//   width,
//   height,
//   h1: 30,
//   h4: 14,
// };
