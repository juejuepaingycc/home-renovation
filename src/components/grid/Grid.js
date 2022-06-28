import React, {useRef, useEffect} from 'react';
import Canvas from 'react-native-canvas';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Grid() {

    const canvasRef = useRef()
  
    let lineOptions = {
        separation: 40,
        color: '#e8ebed'
    }

    useEffect(() => {
        canvasRef.current.height = hp(100)
        canvasRef.current.width = wp(100)
        drawGridLines();
    }, [])

     const drawGridLines = async () => {
 
        var iWidth = canvasRef.current.width;
        var iHeight = canvasRef.current.height;

        var ctx = await canvasRef.current.getContext('2d');

        ctx.strokeStyle = lineOptions.color;
        ctx.strokeWidth = 0.1;

        ctx.beginPath();

        var iCount = null;
        var i = null;
        var x = null;
        var y = null;

        iCount = Math.floor(iWidth / lineOptions.separation);
 
        for (i = 1; i <= iCount; i++) {
            x = (i * lineOptions.separation);
            ctx.moveTo(x, 0);
            ctx.lineTo(x, iHeight);
            ctx.stroke();
        }
 
 
        iCount = Math.floor(iHeight / lineOptions.separation);

        for (i = 1; i <= iCount; i++) {
            y = (i * lineOptions.separation);
            ctx.moveTo(0, y);
            ctx.lineTo(iWidth, y);
            ctx.stroke();
        }

        ctx.closePath();
        return;
    }

    return (
        <Canvas ref={canvasRef} />
    )

}