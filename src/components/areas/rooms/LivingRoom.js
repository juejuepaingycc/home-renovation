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
  MODE_HACKING_DOOR, 
  MODE_DROPPING_ITEM
} from '../../../../constants';
import Sofa from '../../catalog/furniture/Sofa';

// Images
import tileImg from '@assets/images/tile.jpeg'
import parquetImg from '@assets/images/parquet.jpeg'
import grassImg from '@assets/images/grass.jpg'
import vinylImg from '@assets/images/vinyl.jpg'
import imagePng from '@assets/images/parquet.jpeg'

export default function LivingRoom({}) {
  const {
    selectAllStatus, 
    mode, 
    changeCount, 
    selectedCount,
    lrLaying,
    changeMode,
    changeDropCoords
  } = useContext(AuthContext);

   const canvasRef = useRef()
   const [selected, setSelected] = useState(false) // for selecting Area
   const [dropped, setDropped] = useState(false) // dropped furniture item on Area
 
   useEffect(() => {
    if(selectAllStatus == 'select'){
      setSelected(true)
    }
    else if (selectAllStatus == 'unselect') {
      setSelected(false)
    }
   }, [selectAllStatus])

   useEffect(() => {
    if(lrLaying) {
      if(lrLaying.name == 'Tiles') drawRoom(tileImg)
      else if(lrLaying.name == 'Vinyl') drawRoom(vinylImg)
      else if(lrLaying.name == 'Parquet') drawRoom(parquetImg)
      else drawRoom(grassImg)
    }
   }, [lrLaying])

    useEffect(() => {
       drawRoom(imagePng)
    }, [])

    const drawRoom = async (imageUri) => {
      let imageSrc = RNImage.resolveAssetSource(imageUri).uri 
      canvasRef.current.width = wp(40);
      canvasRef.current.height = hp(40);
      const context = canvasRef.current.getContext('2d');

      const image = new CanvasImage(canvasRef.current);
    
      image.src = imageSrc; 
      image.addEventListener('load', () => {
        context.drawImage(image, 0, 0, wp(40), hp(40));
      })    
    }

    const tapArea = (_event) => {
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
        changeDropCoords({x: _event.x, y: _event.y})
        changeMode(MODE_DROPPING_ITEM)
        setDropped(true)
      }
      else if(mode == MODE_HACKING_DOOR) {
        ToastAndroid.show('Please click on door', ToastAndroid.SHORT)
      }
      return 
    }

    const tap =  Gesture.Tap().onStart((_event, success) => {
      runOnJS(tapArea)(_event);
    });

    return (
      <View  style={styles.rightRoom}>
        <GestureDetector gesture={tap}>
          <Animated.View>
              <Canvas ref={canvasRef} />
              {selected &&  <View style={styles.selectLR} />}
              <Text style={[styles.label, {left: wp(2)}]}>Living Room</Text>
          </Animated.View>
        </GestureDetector>
        <View style={{ position: 'absolute', zIndex: dropped ? 1 : -1 }}>
          <Sofa />
        </View> 
      </View>
  )
}