const matrixScreen = formatMessage => ({
    name: "触摸传感器",
    extensionId: 'DBitTouch',
    
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitTouch.description',
        default: '触摸开关、可感应人体、金属'
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

module.exports = matrixScreen;
