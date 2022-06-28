import {StyleSheet} from 'react-native';
import { 
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    container: {
      width: wp(100),
      height: hp(100),
      backgroundColor: '#fff'
    },
    mainContent: {
      alignSelf: 'center',
      width: wp(95),
      height: hp(55), //66
      backgroundColor: '#f5f6f7',
      borderRadius: hp(0.5),
      shadowOffset: {width: 0, height: 8},
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: hp(1),
      elevation: 3,
      overflow: 'hidden'
    },
    descContent: {
      height: hp(15),
      alignItems: 'center',
      justifyContent: 'center'

    },
    title: {
      fontSize: hp(3),
      color:'rgb(238, 49, 38)',
      fontWeight: 'bold'
    },
    desc: {
      fontSize: hp(1.8),
      paddingTop: hp(0.7),
      paddingHorizontal: wp(8)
    },

    footer: {
      height: hp(27),
      alignItems: 'center',
      justifyContent: 'center'
    },
    selectBtn: {
      width: wp(55),
      height: hp(5),
      borderRadius: hp(1.6),
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'rgb(238, 49, 38)'
    },
    selectAll: {
      fontSize: hp(2),
      color:'rgb(238, 49, 38)',
      fontWeight: 'bold'
    },
    areaRow: {
      flexDirection: 'row',
      paddingTop: hp(1)
    },
    selected: {
      fontSize: hp(1.7),
    },
    confirmBtn: {
      width: wp(90),
      height: hp(4.5),
      borderRadius: hp(1.6),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(238, 49, 38)',
      marginTop: hp(4)
    },
    confirm: {
    fontSize: hp(1.7),
    color: '#fff',
   
    },
    rotateBtn: {
      width: hp(6),
      height: hp(6),
      borderRadius: hp(3),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(238, 49, 38)',
      marginTop: hp(4),
      marginLeft: wp(2)
    },
    chooseBtn: {
      width: wp(50),
      height: hp(4.5),
      borderRadius: hp(1.6),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgb(238, 49, 38)',
      marginTop: hp(3),
      alignSelf: 'flex-end',
      marginRight: wp(5),
      marginBottom: hp(-8)
    },
    row: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      marginRight: wp(5),
      marginTop: hp(-8)
    }
})
