const fourDigitClockDisplay = formatMessage => ({
    name: formatMessage({
        id: 'DBitFourDigitClockDisplay.name',
        default: '四位数码管'
    }),
    extensionId: 'DBitFourDigitClockDisplay',
    
    supportDevice: ['arduinoNano'],
    
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitFourDigitClockDisplay.description',
        default: '显示模块，IIC接口'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    
});

module.exports = fourDigitClockDisplay;
