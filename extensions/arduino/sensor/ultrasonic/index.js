const ultrasonic = formatMessage => ({
    name: formatMessage({
        id: 'DBitUltrasonic.name',
        default: '超声波传感器'
    }),
    extensionId: 'ultrasonic',
    
    supportDevice: ['arduinoNano'],
    
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitUltrasonic.description',
        default: '模拟双探头超声波测距'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    
});

module.exports = ultrasonic;
