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

    config.addFilter('getLightThemeColor', function () {
        const { themeColor: { light: lightTheme }, colors: { light } } = require('./_data/theme.json');
        const value = light.find(({ name }) => name === lightTheme).value;

        return `rgb(${value})`;
    });

    config.addFilter('getDarkThemeColor', function () {
        const { themeColor: { dark: darkTheme }, colors: { dark } } = require('./_data/theme.json');
        const value = dark.find(({ name }) => name === darkTheme).value;

        return `rgb(${value})`;
    });

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
