const fourDigitClockDisplay = formatMessage => ({
    name: formatMessage({
        id: 'DBitFourDigitClockDisplay.name',
        default: '四位时钟数码管'
    }),
    extensionId: 'DBitFourDigitClockDisplay',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitFourDigitClockDisplay.description',
        default: '显示模块，IIC接口'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnslxL3crkE1Y1w4NfeVko4P',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
});

module.exports = fourDigitClockDisplay;
