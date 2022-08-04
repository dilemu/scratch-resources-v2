const matrixScreen = formatMessage => ({
    name: "轴流式风扇",
    extensionId: 'DBitFanControl',
    
    supportDevice: ['arduinoNano'],
    
    iconURL: `asset/large.png`,
    insetIconURL: `asset/small.png`,
    description: formatMessage({
        id: 'DBitFanControl.description',
        default: '可控制速度和正反转的风扇'
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
