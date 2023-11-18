const dateUtils = require('./src/utils/eleventy/dates');
const optionUtils = require('./src/utils/eleventy/themeOptions');

module.exports = function(config) {
    config.addPassthroughCopy({ 'src/images': 'images' });
    config.addPassthroughCopy({ 'src/css': 'css' });

    // config.addFilter('currentYear', dateUtils.currentYear);
    // config.addFilter('readableDate', dateUtils.readableDate);
    // config.addFilter('shortDate', dateUtils.shortDate);
    // config.addFilter('findOption', optionUtils.findOption);
    // config.addFilter('findColor', optionUtils.findColor);

    // return {
    //     dir: {
    //         templateFormat: ['11ty.js','md'],
    //         input: 'src',
    //         output: '_site',
    //     },
    // }
    return {
        dir: {
            includes: 'src/includes',
            layouts: 'src/layouts',
            data: 'src/data',
        }
    };
}
