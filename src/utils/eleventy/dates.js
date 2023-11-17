const currentYear = () => {
    const date = new Date();

    return date.getFullYear();
};

const readableDate = (datetime) => {
    const date = new Date(datetime);

    return date.toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

const shortDate = (datetime) => {
    const date = new Date(datetime);

    // Korean format uses year-month-day order which is preferred for posts
    // @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#using_locales
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
};

module.exports = {
    currentYear,
    readableDate,
    shortDate,
};
