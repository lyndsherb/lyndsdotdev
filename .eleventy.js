module.exports = function(config) {
    config.addPassthroughCopy('css');
    config.addPassthroughCopy({ 'images/favicons': 'images/favicons' });

    config.addFilter('currentYear', function() {
        const date = new Date();

        return date.getFullYear();
    });

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
