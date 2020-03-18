module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/common/scss/main.scss";`
            }
        }
    }
};
