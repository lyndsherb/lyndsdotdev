module.exports = function(config) {
    config.addPassthroughCopy('css');
    config.addPassthroughCopy({ 'images/favicons': 'images/favicons' });

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
