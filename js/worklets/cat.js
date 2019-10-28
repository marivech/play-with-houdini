class CirclePainter {
    paint(ctx, geom, properties) {
        ctx.fillStyle = 'tomato';
        ctx.strokeStyle = 'tomato';
        ctx.lineWidth = '5';
        ctx.beginPath();

        ctx.moveTo(50, 100);
        ctx.lineTo(75, 50);
        ctx.lineTo(100, 100);


        ctx.moveTo(200, 100)
        ctx.lineTo(225, 50);
        ctx.lineTo(250, 100);

        ctx.moveTo(100, 150)
        ctx.arc(100, 150, 10, 0, Math.PI * 2, true);

        ctx.moveTo(200, 150)
        ctx.arc(200, 150, 10, 0, Math.PI * 2, true);


        ctx.moveTo(140, 200);
        ctx.arc(100, 200, 40, 0, Math.PI, false);

        ctx.moveTo(220, 200);
        ctx.arc(180, 200, 40, 0, Math.PI, false);
        ctx.stroke();

    }
}
registerPaint('circle', CirclePainter);