<template>
    <canvas
        id="points"
        style="position:absolute;width:100%;height:100%"
        type="2d"
    ></canvas>
</template>
<script>
import { randomRadius, randomColor } from '../util/canvasUtil';
import {
    requestAnimationFrame,
    cancelAnimationFrame
} from '../util/requestAnimationFrame';

export default {
    data() {
        return {
            points: [],
            pointNum: 10
        };
    },
    onReady() {
        uni.createSelectorQuery()
            .in(this)
            .select('#points')
            .fields({
                node: true,
                size: true
            })
            .exec(this.init.bind(this));
    },
    onHide() {
        this.cancelAnimationFrame(this.timer);
    },
    methods: {
        init(res) {
            let canvas = res[0].node,
                ctx = canvas.getContext('2d'),
                dpr = 1;

            this.requestAnimationFrame =
                canvas.requestAnimationFrame.bind(canvas) ||
                requestAnimationFrame;
            this.cancelAnimationFrame =
                canvas.cancelAnimationFrame.bind(canvas) ||
                cancelAnimationFrame;

            //  const dpr = uni.getSystemInfoSync().pixelRatio;
            canvas.width = res[0].width * dpr;
            canvas.height = res[0].height * dpr;
            this.canvas = canvas;
            this.ctx = ctx;

            this.points = this.createPoints(this.pointNum);

            this.timer = this.requestAnimationFrame(this.circleRender);
        },
        circleRender() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (let i = 0; i < this.pointNum; i++) {
                this.render(i);
            }

            this.requestAnimationFrame(this.circleRender);
        },
        createPoints(number = 1) {
            let points = [];

            for (let i = 0; i < number; i++) {
                let radius = randomRadius(5, 10),
                    color = randomColor(true);

                points.push({
                    radius,
                    color,
                    x: this.canvas.width / 2,
                    y: this.canvas.height - radius / 2,
                    deltaY: 4 * Math.random(),
                    dir: Math.random() > 0.5 ? 0 : 1
                });
            }

            return points;
        },
        render(i) {
            let points = JSON.parse(JSON.stringify(this.points));

            let {
                radius,
                color: { r, g, b, alpha },
                x,
                y,
                deltaY,
                dir
            } = points[i];

            if (x < 0 || x > this.canvas.width) {
                this.points[i].dir = dir ? 0 : 1;
                dir = dir ? 0 : 1;
            }

            if (y < 0) {
                this.points[i] = this.createPoints()[0];
                return;
            }

            this.ctx.beginPath();
            this.ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            this.ctx.fillStyle = 'rgba(255,255,255,0.3)';
            this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.closePath();

            this.points[i].x = dir ? x + 1 : x - 1;
            this.points[i].y = y - deltaY;
        }
    }
};
</script>
<style lang="scss">
</style>
