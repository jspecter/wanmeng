/**
 * @description 根据入参随机半径数值
 * @param {Number} min 半径随机最小值
 * @param {Number} max 半径随机最大值
 * @returns {Number} return random number && min <= random < max
 */

export function randomRadius(min = 1, max = 5) {
    if (min < 0 || max < 0 || max < min) {
        throw new Error('入参错误');
    }

    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('入参应为Number类型');
    }

    let random = Math.random() * (max - 1) + min;
    return random.toFixed(2);
}

/**
 * @description 随机rgba颜色值及透明度
 *
 * @returns {Object} 包含r、g、b、alpha四个值得对象
 */

export function randomColor(isOpacity = false) {
    let r = 255,
        g = 255,
        b = 255,
        alpha = 1;

    r = parseInt(Math.random() * 255, 10);
    g = parseInt(Math.random() * 255, 10);
    b = parseInt(Math.random() * 255, 10);

    if (isOpacity) {
        alpha = Math.random();
    }
    return {
        r,
        g,
        b,
        alpha
    };
}
