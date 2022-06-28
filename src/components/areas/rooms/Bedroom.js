import React, {useRef, useContext, useState, useEffect} from 'react';
import {
    View,
    Image as RNImage,
    ToastAndroid,
    Text
} from 'react-native';
import Canvas, {Image as CanvasImage} from 'react-native-canvas';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Animated, {runOnJS} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector
} from 'react-native-gesture-handler';

// Components
import styles from './Style';
import {AuthContext} from '@context/Context';
import { 
  MODE_HOLDING_ITEM, 
  MODE_SELECTING_AREA, 
  MODE_HACKING_DOOR 
} from '../../../../constants';
import imagePng from '@assets/images/defaultFloor.jpeg'
const imageUri = RNImage.resolveAssetSource(imagePng).uri 

export default function Bedroom({}) {
  
  const {
    selectAllStatus, 
    mode,  
    changeCount, 
    selectedCount
  } = useContext(AuthContext);

  const canvasRef = useRef()

  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if(selectAllStatus == 'select'){
      setSelected(true)
    }
    else if (selectAllStatus == 'unselect') {
      setSelected(false)
    }
  }, [selectAllStatus])

  useEffect(() => {
    drawRoom()
  }, [])

  const drawRoom = async () => {
    const image = new CanvasImage(canvasRef.current);
    canvasRef.current.width = wp(47);
    canvasRef.current.height = hp(20);
    const context = canvasRef.current.getContext('2d');

    image.src = imageUri; 
    image.addEventListener('load', () => {
      context.drawImage(image, wp(7), 0, wp(40), hp(20));
    });
  }

  const tapArea = () => {
    if(mode == MODE_SELECTING_AREA) {
      if(selected){
        setSelected(false)
        changeCount(selectedCount - 1)
      }
      else{
        setSelected(true)
        changeCount(selectedCount + 1)
      }
    }
    else if (mode == MODE_HOLDING_ITEM) {
      ToastAndroid.show('Please click on Living Room', ToastAndroid.SHORT)
    }
    else if(mode == MODE_HACKING_DOOR) {
      ToastAndroid.show('Please click on door', ToastAndroid.SHORT)
    }
  }

  const tap =  Gesture.Tap().onStart(() => {
      runOnJS(tapArea)();
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View>
        <Canvas  ref={canvasRef} />
        {selected &&  <View style={styles.selectBedRoom} />}
        <Text style={styles.label}>Bedroom</Text>
      </Animated.View>
    </GestureDetector>
  )
}