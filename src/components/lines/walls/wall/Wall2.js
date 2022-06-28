import React, {useRef, useState, useEffect} from 'react';
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

export default function Wall2({}) {

    const canvasRef = useRef()
  
    useEffect( () => {
        async function drawWall() {
                 canvasRef.current.height = hp(50)
     canvasRef.current.width = wp(90)

            var ctx = await canvasRef.current.getContext('2d');

            ctx.beginPath();
            ctx.moveTo(wp(22), hp(23));
            ctx.lineTo(wp(52), hp(23));
            ctx.strokeStyle = '#afb0b3';  
            ctx.lineWidth = 4;
            ctx.stroke();
        }
        drawWall()   
    }, [])

    return (
        <View style={{position: 'absolute', zIndex: 1}}>
            <Canvas ref={canvasRef} />
        </View>
    )

}