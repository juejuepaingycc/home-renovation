import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    container: {
       
    },
    door1: {
        position: 'absolute', zIndex: 1,
        marginLeft: wp(51.5),
        top: hp(14)
    },
    door2: {
        position: 'absolute', zIndex: 1,
        marginLeft: wp(51.5),
        top: hp(24)
    },
    door3: {
        position: 'absolute',
        zIndex: 3,
        marginLeft: wp(62),
        top: hp(49)
    }
})
