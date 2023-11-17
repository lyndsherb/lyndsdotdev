const findOption = (options, optionName) => {
    if (!options?.length) {
        console.warn('No options passed to findoption');
        return null;
    }

    if (!optionName) {
        console.warn('No option name passed to findoption');
        return null;
    }

    const option = options.find(({ name }) => name === optionName);

    if (!option?.value) {
        console.warn(`Could not find associated value for ${optionName}`);
        return null;
    }

    return option.value;
};

const findColor = (colors, colorName, alpha = 1) => {
    const color = findOption(colors, colorName);

    if (alpha < 1) {
        return `rgba(${color}, ${alpha})`;
    }

    return `rgb(${color})`;
};

module.exports = {
    findOption,
    findColor,
};
