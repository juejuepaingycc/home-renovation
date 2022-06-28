
import React, {useRef, useContext, useState, useEffect} from 'react';
import {
    View,
    Image,
    Modal,
    TouchableOpacity,
    FlatList,
    Text
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import styles from './Style';

  export default function CategoryItem({ item, categoryHandler }) {

        return (
            <TouchableOpacity 
            style={styles.catalogItem}
            activeOpacity={0.8}
            onPress={()=> categoryHandler(item)}
            disabled={item.name != 'Sofa'}
            >
                <Text style={styles.f}>
                    {item.name}
                </Text>
                <Text style={styles.f}>
                    See More Items
                </Text>
            </TouchableOpacity>
        );
 

    }