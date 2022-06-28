
import React from 'react';
import {
    View,
    Modal,
    TouchableOpacity,
    Text
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styles from './Style';

export default function ConfirmModal({
  title,
  description, 
  options, 
  chooseOption, 
  closeModal, 
  nextHandler
}) {

    return (
    <Modal
      transparent={true}
      visible={true}
      
      animationType="fade">
      <View style={styles.modalView}>
        <View style={styles.modalBg}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={{alignSelf: 'center'}}>
            {options.map((option, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  key={index}
                  style={[
                    styles.optionBtn, 
                    {        
                      marginTop: index == 0 ? hp(20) : 0
                    }]}
                  onPress={()=> chooseOption(option)}>
                    {option.selected ?
                      <View style={styles.radio}>
                        <View style={styles.selectedRadio} />
                      </View>
                    :
                      <View style={styles.radio} />
                    }
                    <Text style={styles.option}>
                      {option.name}
                    </Text>
                </TouchableOpacity>
              )
          })}
          </View>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.confirmBtn}
              onPress={nextHandler}>
                <Text style={styles.confirm}>Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>
  </Modal>
)}