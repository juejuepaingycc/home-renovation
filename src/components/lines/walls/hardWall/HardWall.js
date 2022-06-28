import React, {useRef, useEffect} from 'react';
import {
    View
} from 'react-native';
import Canvas from 'react-native-canvas';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default function HardWall({}) {

    const canvasRef = useRef()
  
    useEffect(() => {
        drawWall()
    }, [])

    const drawWall = async () => {
        canvasRef.current.height = hp(66)
        canvasRef.current.width = wp(95)
        var ctx = await canvasRef.current.getContext('2d');

        var coordinates = [
            {
                x: wp(92),
                y: hp(49)
            },
            {
                x: wp(92),
                y: hp(9)
            },
            {
                x: wp(52),
                y: hp(9)
            },
            {
                x: wp(52),
                y: hp(3)
            },
            {
                x: wp(12),
                y: hp(3)
            },
            {
                x: wp(12),
                y: hp(23)
            },
            {
                x: wp(22),
                y: hp(23)
            },
            {
                x: wp(22),
                y: hp(33)
            },
            {
                x: wp(5),
                y: hp(33)
            },
            {
                x: wp(5),
                y: hp(49)
            },
            {
                x: wp(92),
                y: hp(49)
            },
        ];

        ctx.beginPath();
        ctx.moveTo(wp(92), hp(49));
        coordinates.forEach(function(coordinate) {
            ctx.lineTo(coordinate.x, coordinate.y);
        });
        ctx.strokeStyle = '#000';  
        ctx.lineWidth = 7;
        ctx.stroke();
        ctx.closePath();
    }

    return (
        <View style={{zIndex: 2}}>
            <Canvas ref={canvasRef} />
        </View>
    )
}