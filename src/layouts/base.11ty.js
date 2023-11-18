module.exports = (data) => {
    console.log('debug', data);
    return `
        <body style="color: orange">
            ${data.content}
        </body>
    `;
}
