import React, { useEffect, useState } from 'react';

export default function WhiteBoard({ canvasRef, Pen, color, brushValue }) {
    const [isDrawing, setIsDrawing] = useState(false);
    const [ctx, setCtx] = useState(null)
    useEffect(() => {

        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        setCtx(ctx);


    }, [canvasRef]);

    useEffect(() => {
        if (ctx) {
            ctx.strokeStyle = color;
            ctx.lineCap = "round";
            ctx.lineWidth = brushValue;
            
        }
    }, [color, ctx, brushValue]);

    const handleMouseDown = (e) => {
        if (Pen) return;
        const { offsetX, offsetY } = e.nativeEvent;
        setIsDrawing(true);
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
    };

    const handleMouseMove = (e) => {
        if (!isDrawing || Pen) return;
        const { offsetX, offsetY } = e.nativeEvent;
        const ctx = canvasRef.current.getContext('2d');
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
    };

    return (
        <canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseUp} // Stop drawing if the mouse leaves the canvas
            ref={canvasRef}

            className='flex flex-row justify-center w-full mt-[-48px] p-2 md:px-5 shadow-xs max-w-[1200px] border  border-dark h-[740px] rounded-[9px]' // Ensure this class provides necessary styling
        ></canvas>
    );
}
