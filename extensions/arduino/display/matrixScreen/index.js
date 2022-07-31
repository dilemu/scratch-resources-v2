const matrixScreen = formatMessage => ({
    name: "点阵屏",
    extensionId: 'DBitMatrixScreen',
    
    supportDevice: ['arduinoNano'],
    
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitMatrixScreen.description',
        default: '迷你点阵显示模块，IIC接口'
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

module.exports = matrixScreen;
