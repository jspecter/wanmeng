const requestAnimationFrame = function(fn) {
    if (typeof fn !== 'function') {
        throw new Error('入参应为函数');
    }

    if (this._$$timerMap && this._$$timerMap[fn.name]) {
        return;
    }

    const timer = setInterval(fn, 16.667, this);

    this._$$timerMap = {};

    this._$$timerMap[fn.name] = timer;
    return timer;
};

const cancelAnimationFrame = function(timer) {
    let hasTimer = false;

    if (!this._$$timerMap) {
        throw new Error('没有对应的计时器');
    }

    for (let fnName in this._$$timerMap) {
        if (this._$$timerMap[fnName] === timer) {
            clearInterval(timer);
            hasTimer = true;
        }
    }

    hasTimer && delete this._$$timerMap[timer];
};

export { requestAnimationFrame, cancelAnimationFrame };
