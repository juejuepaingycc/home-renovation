import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'rgba(52, 52, 52, 0.3)',
        height: hp(100),
        justifyContent: 'center',
        
      },
      modalBg: {
        backgroundColor: '#fff',
        borderRadius: hp(1.2),
        width: wp(100),
        alignSelf: 'center',
        height: hp(93),
      },
      catalogItem: {
        width: wp(42),
        height: hp(22),
       backgroundColor: '#fff',
        marginBottom: hp(2),
        borderRadius: hp(2),
        shadowOffset: {width: 2, height: 3},
        shadowColor: 'rgb(238, 49, 38)',
        shadowOpacity: 0.1,
        shadowRadius: hp(1),
        elevation: 3,
        overflow: 'hidden',
        margin: wp(0.6)
      },
      catalogImg: {
        width: wp(35),
        height: hp(15),
        resizeMode: 'contain',
        alignSelf :'center'
      },
      nameContent: {
        height: hp(7),
        justifyContent: 'center',
        borderRadius: hp(2),
        paddingLeft: wp(4)
      },
      catalogName: {
        fontSize :hp(1.8),
      },
      title: {
        fontSize: hp(2),
        paddingLeft: wp(5),
        fontWeight: 'bold',
        color: '#464747'
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: wp(4),
        marginVertical: hp(2),
        marginBottom: hp(5)
      }
})
