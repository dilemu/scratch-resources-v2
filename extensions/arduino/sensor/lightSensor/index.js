const matrixScreen = formatMessage => ({
    name: "光敏传感器",
    extensionId: 'DBitLightSensor',
    
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitLightSensor.description',
        default: '可测量环境光强度'
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
