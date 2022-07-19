const fourDigitClockDisplay = formatMessage => ({
    name: formatMessage({
        id: 'DBitFourDigitClockDisplay.name',
        default: '四位数码管'
    }),
    extensionId: 'DBitFourDigitClockDisplay',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/fourDigitClockDisplay.png`,
    description: formatMessage({
        id: 'DBitFourDigitClockDisplay.description',
        default: 'TM1650四位数码管.'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://delightmom.com'
});

module.exports = fourDigitClockDisplay;
