const dateUtils = require('./utils/eleventy/dates');
const optionUtils = require('./utils/eleventy/themeOptions');

module.exports = function(config) {
    config.addPassthroughCopy({ 'images/favicons': 'images/favicons' });

    config.addFilter('currentYear', dateUtils.currentYear);
    config.addFilter('readableDate', dateUtils.readableDate);
    config.addFilter('shortDate', dateUtils.shortDate);
    config.addFilter('findOption', optionUtils.findOption);
    config.addFilter('findColor', optionUtils.findColor);

    return {
        dir: {
            templateFormat: ['11ty.js','md'],
            input: 'src',
            output: '_site',
        },
    }
}
