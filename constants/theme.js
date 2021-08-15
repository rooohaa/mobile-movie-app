import { DefaultTheme } from '@react-navigation/native';
import Colors from '../constants/Colors';

export const MyTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      text: Colors.light,
      card: Colors.bgDarkColor,
      background: Colors.darkBg,
      border: Colors.bgDarkColor,
   },
};
