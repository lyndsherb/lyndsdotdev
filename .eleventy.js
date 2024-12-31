const dateUtils = require('./utils/eleventy/dates');
const optionUtils = require('./utils/eleventy/themeOptions');

module.exports = function(config) {
    config.addPassthroughCopy({
        'images/favicons': 'images/favicons',
        'images/posts': 'images/posts'
    });

    config.addFilter('currentYear', dateUtils.currentYear);
    config.addFilter('readableDate', dateUtils.readableDate);
    config.addFilter('shortDate', dateUtils.shortDate);
    config.addFilter('findOption', optionUtils.findOption);
    config.addFilter('findColor', optionUtils.findColor);

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
