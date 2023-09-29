module.exports = function(config) {
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

    config.addFilter('shortDate', function (datetime) {
        const date = new Date(datetime);

        // Korean uses year-month-day order which is preferred for posts
        // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#using_locales
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
    });

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
