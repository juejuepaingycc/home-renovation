import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    rightRoom: {
      position: 'absolute',
      top: hp(9),
     left: wp(52)
    },
    selectBedRoom: {
      backgroundColor: 'rgba(238, 49, 38, 0.7)',
      width: wp(40),
      height: hp(20),
      left: wp(7),
      position: 'absolute'
    },
    selectKitchen: {
      backgroundColor: 'rgba(238, 49, 38, 0.7)',
      width: wp(47),
      height: hp(16),
      position: 'absolute',
    },
    selectToilet: {
      backgroundColor: 'rgba(238, 49, 38, 0.7)',
      width: wp(30),
      height: hp(10),
      left: wp(17),
      position: 'absolute',
    },
    selectLR: {
      backgroundColor: 'rgba(238, 49, 38, 0.7)',
      width: wp(40),
      height: hp(40),
      position: 'absolute',
    },
    label: {
      position: 'absolute',
      left: wp(9),
      top: wp(2),
      fontSize: hp(1.8)
    },
})
