
import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import styles from './Style';

export default function CatalogItem({ item, catalogHandler }) {

    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.catalogItem} 
            onPress={()=> catalogHandler(item)}>
            <Image
                source={item.source}
                style={styles.catalogImg} />
            <View style={styles.nameContent}>
                <Text style={styles.catalogName}>
                    {item.name}
                </Text>
            </View>

        </TouchableOpacity>
    );
}