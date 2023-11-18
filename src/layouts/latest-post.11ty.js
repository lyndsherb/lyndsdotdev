const postTheme = require('./post.11ty');

module.exports = (data) => {
    const [post] = data.collections.all.reverse();

    return postTheme({
        ...post.data,
        date: post.date,
        content: post.content,
    });
}
