const matrixScreen = formatMessage => ({
    name: "电机驱动模块",
    extensionId: 'DBitMotor',
    
    supportDevice: ['arduinoNano'],
    
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitMotor.description',
        default: '可控制正反转和调速的电机'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['motion'],
    
});

module.exports = matrixScreen;
