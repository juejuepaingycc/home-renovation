import React, {useEffect, useContext} from 'react';
import {
    View,
    DeviceEventEmitter,
    Image as RNImage,
    Dimensions
} from 'react-native';

// Components
import {AuthContext} from '@context/Context';
import { 
  MODE_TRANSFORMING_ITEM, 
  MODE_DROPPING_ITEM
} from '../../../../constants';
import {
  Gesture,
  GestureDetector
} from 'react-native-gesture-handler';
import 
  Animated, 
  {
    useSharedValue, 
    useAnimatedStyle
  } from 'react-native-reanimated';

export default function Sofa({}) {

    const {
      mode, 
      holdingFurniture, 
      dropCoords, 
      changeMode
    } = useContext(AuthContext);

    const {width, height} = Dimensions.get('window');

    const offset = useSharedValue({ x: 0, y: 0 });
    const start = useSharedValue({ x: 0, y: 0 });
    const scale = useSharedValue(1);
    const rotation = useSharedValue(0);

    const roomWidth = width * 0.4
    const roomHeight = height * 0.4
    const boundWidth = roomWidth - holdingFurniture.width
    const boundHeight = roomHeight - holdingFurniture.height

    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [
          { translateX: offset.value.x },
          { translateY: offset.value.y },
          { scale: scale.value },
          { rotate: `${rotation.value}deg` },
        ]
      };
    });

    useEffect(() => {
      const eventListener = DeviceEventEmitter.addListener(
          'rotate.sofa',
          data => {
            rotation.value = rotation.value + 45
          },
        );
  
        const scaleUpEventListener = DeviceEventEmitter.addListener(
          'scale.up',
          data => {
            scale.value = scale.value + 0.1
          },
        );
  
        const scaleDownEventListener = DeviceEventEmitter.addListener(
          'scale.down',
          data => {
              scale.value = scale.value - 0.1
          },
        );
        return () => {
          eventListener.remove();
          scaleUpEventListener.remove();
          scaleDownEventListener.remove();
        };
    })
  
    useEffect(() => {
      if(mode == MODE_DROPPING_ITEM && holdingFurniture.name == 'Sofa') {
        offset.value = {
            x: dropCoords.x,
            y: dropCoords.y
          };
          start.value = {
            x: dropCoords.x,
            y: dropCoords.y
          };
        changeMode(MODE_TRANSFORMING_ITEM)
      }
    }, [mode])
      
    const dragGesture = Gesture.Pan()
      .averageTouches(true)
      .onUpdate((e) => {
        offset.value = {
            x: e.translationX + start.value.x,
            y: e.translationY + start.value.y,
        };
      })
      .onEnd(() => {
        if(offset.value.x < -20) {
            offset.value = {
                x: 0,
                y: offset.value.y
            };
        }
        else if(offset.value.x > boundWidth) {
            offset.value = {
                x: boundWidth,
              y:offset.value.y
            };
        }
        else if(offset.value.y < -10) {
            offset.value = {
                x: offset.value.x,
                y: 0
            };
        }
        else if(offset.value.y > boundHeight) {
            offset.value = {
                x: offset.value.x,
                y: boundHeight
            };
        }
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    });

    return (
        <View>
          <GestureDetector gesture={dragGesture}>
            <Animated.View style={animatedStyles}>
              <RNImage 
                source={holdingFurniture.source}
                style={{
                    width: holdingFurniture.width,
                    height: holdingFurniture.height 
                }}/>
            </Animated.View>
          </GestureDetector>
        </View>
    )

}