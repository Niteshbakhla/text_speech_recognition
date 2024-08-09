import React, { useRef, useEffect, useState } from 'react';

function ShapeCanvas({ command }) {
            const canvasRef = useRef(null);
            const [isDrawing, setIsDrawing] = useState(false);

            useEffect(() => {
                        const canvas = canvasRef.current;
                        const ctx = canvas.getContext('2d');
                        let animationFrameId;

                        const drawShape = () => {
                                    const canvasWidth = canvas.width;
                                    const canvasHeight = canvas.height;

                                    const startX = canvasWidth / 2;
                                    const startY = canvasHeight / 2;
                                    let progress = 0;

                                    const draw = () => {
                                                ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas

                                                // Draw the shape based on command
                                                ctx.strokeStyle = 'black';
                                                ctx.lineWidth = 2;
                                                ctx.fillStyle = 'transparent';

                                                switch (command.toLowerCase()) {
                                                            case 'circle':
                                                                        ctx.beginPath();
                                                                        ctx.arc(startX, startY, 50, 0, (2 * Math.PI * progress) / 100);
                                                                        ctx.stroke();
                                                                        break;
                                                            case 'square':
                                                                        const size = 100 * (progress / 100);
                                                                        ctx.beginPath();
                                                                        ctx.rect(startX - size / 2, startY - size / 2, size, size);
                                                                        ctx.stroke();
                                                                        break;
                                                            case 'rectangle':
                                                                        const rectWidth = 200 * (progress / 100);
                                                                        const rectHeight = 100 * (progress / 100);
                                                                        ctx.beginPath();
                                                                        
                                                                        ctx.rect(startX - rectWidth / 2, startY - rectHeight / 2, rectWidth, rectHeight);
                                                                        ctx.stroke();
                                                                        break;
                                                            case 'triangle':
                                                                        ctx.beginPath();
                                                                        ctx.moveTo(startX, startY - 50 * (progress / 100));
                                                                        ctx.lineTo(startX - 50 * (progress / 100), startY + 50 * (progress / 100));
                                                                        ctx.lineTo(startX + 50 * (progress / 100), startY + 50 * (progress / 100));
                                                                        ctx.closePath();
                                                                        ctx.stroke();
                                                                        break;
                                                            default:
                                                                        ctx.fillStyle = 'black';
                                                                        ctx.font = '24px Arial';
                                                                        ctx.textAlign = 'center';
                                                                        ctx.fillText('Say "circle", "square", "rectangle", or "triangle"', canvasWidth / 2, canvasHeight / 2);
                                                }

                                                // Draw the pencil
                                                ctx.beginPath();
                                                ctx.arc(startX, startY, 5, 0, 2 * Math.PI);
                                                ctx.fillStyle = 'black';
                                                ctx.fill();

                                                // Update progress for animation
                                                progress += 1;
                                                if (progress <= 100) {
                                                            animationFrameId = requestAnimationFrame(draw);
                                                } else {
                                                            setIsDrawing(false);
                                                            cancelAnimationFrame(animationFrameId);
                                                }
                                    };

                                    draw();
                        };

                        if (command && !isDrawing) {
                                    setIsDrawing(true);
                                    drawShape();
                        }

                        return () => cancelAnimationFrame(animationFrameId);
            }, [command]);

            return (
                        <canvas
                                    className='w-[90%] h-[60vh] m-auto rounded-3xl shadow-lg'
                                    ref={canvasRef}
                                    width={1000}
                                    height={600}
                                    style={{ border: '1px solid black' }}
                        />
            );
}

export default ShapeCanvas;
