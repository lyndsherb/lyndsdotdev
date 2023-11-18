const postTheme = require('./post.11ty');

module.exports = (data) => {
    const [post] = data.collections.all.reverse();

    return postTheme({
        ...post.data,
        title: '',
        date: post.date,
        content: post.content,
    });
}
