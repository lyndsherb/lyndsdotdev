module.exports = function(config) {
    config.addPassthroughCopy('css');

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
