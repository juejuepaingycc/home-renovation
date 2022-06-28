
import React, {useContext, useState} from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    ToastAndroid,
    FlatList,
    Text
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// Components
import styles from './Style';
import { items } from '../items';
import CatalogItem from './CatalogItem';
import {AuthContext} from '@context/Context';
import { MODE_HOLDING_ITEM } from '../../../../constants';

// Icon
import Back from '@assets/icon/Back'

export default function CatalogModal({ closeModal, holdItem }) {

    const {
      changeMode, 
      changeHoldingFurniture
    } = useContext(AuthContext);


    const renderItem = ({item}) => {
      return (
          <CatalogItem item={item} catalogHandler={catalogHandler} />
      );
    };

    const catalogHandler = (item) => {
      if(item.name == 'Sofa') {
        changeHoldingFurniture(item)
        changeMode(MODE_HOLDING_ITEM)
        holdItem(item)
      }
      else {
        ToastAndroid.show('Only Sofa is available at the moment', ToastAndroid.SHORT)
      }
    }  

    return (
      <Modal
        transparent={true}
        visible={true}
        animationType="fade">
        <View style={styles.modalView}>
          <View style={styles.modalBg}>
            <View style={styles.catalogContent}>
              <View style={styles.row}>
                <TouchableOpacity
                  activeOpacity={0.8} 
                  style={styles.back} 
                  onPress={closeModal}>
                  <Back />
                </TouchableOpacity>
                <Text style={styles.title}>Add Furniture</Text>
              </View>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={items}
                contentContainerStyle={{ marginHorizontal: wp(6) }}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={(item, index) => item.item_id}
                renderItem={renderItem} />
            </View>
          </View>
        </View>
    </Modal>
)
  }