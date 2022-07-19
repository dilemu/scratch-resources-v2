const ultrasonic = formatMessage => ({
    name: formatMessage({
        id: 'DBitUltrasonic.name',
        default: '超声波传感器'
    }),
    extensionId: 'ultrasonic',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/ultrasonic.png`,
    description: formatMessage({
        id: 'DBitUltrasonic.description',
        default: '标准超声波测距模块'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    helpLink: 'https://delightmom.com'
});

module.exports = ultrasonic;
