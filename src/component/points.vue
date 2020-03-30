<template>
    <canvas
        id="points"
        style="position:absolute;width:100%;height:100%"
        type="2d"
    ></canvas>
</template>
<script>
import { randomRadius, randomColor } from '../util/canvasUtil';

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
        clearInterval(this.timer);
    },
    methods: {
        init(res) {
            let canvas = res[0].node,
                ctx = canvas.getContext('2d'),
                dpr = 1;

            //  const dpr = uni.getSystemInfoSync().pixelRatio;
            canvas.width = res[0].width * dpr;
            canvas.height = res[0].height * dpr;
            this.canvas = canvas;
            this.ctx = ctx;

            this.points = this.createPoints(this.pointNum);
            //  this.render(2);

            // this.timer = setInterval(() => {
            //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //     for (let i = 0; i < this.pointNum; i++) {
            //     }
            // }, 16.7);
        },
        createPoints(number = 1) {
            let points = [];

            for (let i = 0; i < number; i++) {
                let radius = randomRadius(5, 10),
                    color = randomColor();

                points.push({
                    radius,
                    color,
                    x: this.canvas.width / 2,
                    y: this.canvas.height - radius / 2
                });
            }

            return points;
        },
        render(i) {
            let {
                radius,
                color: { r, g, b, alpha },
                x,
                y
            } = this.points[i];

            console.log(radius, r, g, b, alpha, x, y);

            if (x < 0 || x > this.canvas.width || y < 0) {
                this.points[i] = this.createPoints();
            }

            this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
            this.ctx.fill();
            this.ctx.closePath();

            this.points[i].x = x > this.canvas.width / 2 ? x + 1 : x - 1;
            this.points[i].y = y + 3;
        }
    }
};
</script>
<style lang="scss">
</style>
