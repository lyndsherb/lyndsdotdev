module.exports = function(config) {
    config.addPassthroughCopy({ 'src/images': 'images' });
    config.addPassthroughCopy({ 'src/css': 'css' });

    return {
        dir: {
            includes: 'src/includes',
            layouts: 'src/layouts',
            data: 'src/data',
        }
    };
}
