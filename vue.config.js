module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/styles.scss";`,
            },
            scss: {
                prependData: `@import "@/assets/styles/styles.scss";`,
            },
        },
    },
}
