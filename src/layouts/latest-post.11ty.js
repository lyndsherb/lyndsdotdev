const baseTheme = require('./base.11ty');

module.exports = (data) => {
    const [post] = data.collections.all.reverse();

    return baseTheme({
        ...post.data,
        content: post.content,
    });
}
