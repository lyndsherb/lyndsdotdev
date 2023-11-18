module.exports = function(config) {
    config.addPassthroughCopy({ 'src/images': 'images' });
    config.addPassthroughCopy({ 'src/css': 'css' });

    return {
        templateFormats: ['md', '11ty.js'],
        dir: {
            includes: 'src/includes',
            layouts: 'src/layouts',
            data: 'src/data',
        }
    };
}
