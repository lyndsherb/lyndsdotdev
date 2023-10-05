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

    config.addFilter('findColor', function (colors, colorName, alpha = 1) {
        if (!colors?.length) {
            console.warn('No colours passed to findColor');
            return null;
        }

        if (!colorName) {
            console.warn('No colour name passed to findColor');
            return null;
        }

        const color = colors.find(({ name }) => name === colorName);

        if (!color?.value) {
            console.warn(`Could not find associated value for ${colorName}`);
            return null;
        }

        if (alpha < 1) {
            return `rgba(${color.value}, ${alpha})`;
        }

        return `rgb(${color.value})`;
    });

    config.addFilter('findSize', function (sizes, sizeName) {
        if (!sizes?.length) {
            console.warn('No sizes passed to findSize');
            return null;
        }

        if (!sizeName) {
            console.warn('No size name passed to findSize');
            return null;
        }

        const size = sizes.find(({ name }) => name === sizeName);

        if (!size?.value) {
            console.warn(`Could not find associated value for ${sizeName}`);
            return null;
        }

        return size.value;
    });

    return {
        dir: {
            layouts: '_layouts',
        },
    }
}
