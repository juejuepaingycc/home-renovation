import React, {useRef, useState, useEffect, useContext} from 'react';
import {
    View,
} from 'react-native';
import Canvas from 'react-native-canvas';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';


// Components
import styles from './Style';
import {AuthContext} from '@context/Context';
import { MODE_HACKING_DOOR } from '../../../../constants';
import {
    Gesture,
    GestureDetector
} from 'react-native-gesture-handler';
import Animated, {runOnJS} from 'react-native-reanimated';

export default function Door1({}) {

    const {mode, selectedDoor, changeSelectedDoor} = useContext(AuthContext);

    const canvasRef = useRef()
    const [selected, setSelected] = useState(false)

    useEffect( () => {
        drawWall()
    }, [])

    const drawWall = async () => {
        canvasRef.current.height = hp(6) ///hp(50)
        canvasRef.current.width = wp(2) //wp(90)

        var ctx = await canvasRef.current.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(wp(0), 0); //hp(14)
        ctx.lineTo(wp(0), hp(6)); // hp(20)
        ctx.strokeStyle = '#a1875f';  
        ctx.lineWidth = wp(2);
        ctx.stroke();
    }

    const selectLine = async () => {
        var ctx = await canvasRef.current.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(wp(0), 0); //hp(14)
        ctx.lineTo(wp(0), hp(6)); // hp(20)
        ctx.strokeStyle = 'rgb(238, 49, 38)';  
        ctx.lineWidth = wp(2);
        ctx.stroke();
    }

    const toggleLine = () => {
        if(mode != MODE_HACKING_DOOR)
            return
        if(selected){
          drawWall()
          setSelected(false)
          changeSelectedDoor(selectedDoor - 1)
        }
        else{
          selectLine()
          setSelected(true)
          changeSelectedDoor(selectedDoor + 1)
        }
      }

    const tap =  Gesture.Tap().onStart(() => {
        runOnJS(toggleLine)();
    });

    return (
        <View style={styles.door1}>
            <GestureDetector gesture={tap}>
                <Animated.View>
                    <Canvas ref={canvasRef} />
                </Animated.View>
            </GestureDetector>
        </View>
    )

}