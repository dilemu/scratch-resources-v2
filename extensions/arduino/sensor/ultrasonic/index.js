const ultrasonic = formatMessage => ({
    name: formatMessage({
        id: 'DBitUltrasonic.name',
        default: '超声波传感器'
    }),
    extensionId: 'ultrasonic',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitUltrasonic.description',
        default: '模拟双探头超声波测距'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnVehVOEfQY5piSN6wYD2xBg',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
});

module.exports = ultrasonic;
