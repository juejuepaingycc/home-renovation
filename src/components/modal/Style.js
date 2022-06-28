import {StyleSheet} from 'react-native';
import { 
  heightPercentageToDP as hp, 
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'rgba(52, 52, 52, 0.9)',
        height: hp(100),
        justifyContent: 'center',
      },
      modalBg: {
        backgroundColor: '#edf2f2',
        borderRadius: hp(1.2),
        width: wp(97),
        alignSelf: 'center',
        height: hp(93)
      },
      title: {
        fontSize: hp(3),
        color:'rgb(238, 49, 38)',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: hp(4)
      },
      description: {
        fontSize: hp(1.8),
        paddingTop: hp(1.5),
        paddingHorizontal: wp(8),
        textAlign: 'center',
      
      },
      confirmBtn: {
        width: wp(90),
        height: hp(4.5),
        borderRadius: hp(1.6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(238, 49, 38)',
        alignSelf: 'center',
        position: 'absolute',
        bottom: hp(8)
            },
      confirm: {
      fontSize: hp(1.7),
      color: '#fff',
      }  ,
      radio: {
        height: hp(3),
        width: hp(3),
        borderRadius: hp(2),
        borderWidth: 1,
        borderColor: 'rgb(238, 49, 38)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectedRadio: {
        width: hp(1.8),
        height: hp(1.8),
        borderRadius: hp(0.9),
        backgroundColor: 'rgb(238, 49, 38)',
      },
      optionBtn: {
        flexDirection:'row',
        marginBottom: hp(1.7)
      },
      option: {
        fontSize: hp(2),
        paddingLeft: wp(4),
      },

      //Reward Modal
      rewardModalBg: {
        backgroundColor: '#edf2f2',
        borderRadius: hp(1.2),
        width: wp(95),
        alignSelf: 'center',
        height: hp(70),
        justifyContent: 'center',
        alignItems: 'center'
      },
      logo: {
        width: wp(70),
        height: hp(40),
        resizeMode: 'contain',
      },
      title2: {
        fontSize: hp(2.2),
        color:'rgb(238, 49, 38)',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: hp(4)
      },
      claimBtn: {
        width: wp(50),
        height: hp(4.5),
        borderRadius: hp(1.6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(238, 49, 38)',
        marginTop: hp(4)
      }
})