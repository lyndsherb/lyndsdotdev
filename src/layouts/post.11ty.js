const baseTheme = require('./base.11ty');
const dates = require('../utils/eleventy/dates');

module.exports = (data) => baseTheme({
    ...data,
    content: `
        <h2>${data.title}</h2>
        <time>${dates.readableDate(data.date)}</time>
        ${data.content}
    `
});
