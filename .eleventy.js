module.exports = function(config) {
    config.addPassthroughCopy('css');
    config.addPassthroughCopy({ 'images/favicons': 'images/favicons' });

    config.addFilter('currentYear', function() {
        const date = new Date();

        return date.getFullYear();
    });

    config.addFilter('readableDate', function (datetime) {
        const date = new Date(datetime);

        return date.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
