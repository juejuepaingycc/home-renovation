import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
  floorplan: {
      position: 'absolute',
      padding: widthPercentageToDP(5),
      paddingTop: hp(3)
    },
    wall: {
      position: 'absolute',
  }
})
