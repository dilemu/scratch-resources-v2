const matrixScreen = formatMessage => ({
    name: "点阵屏",
    extensionId: 'DBitMatrixScreen',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitMatrixScreen.description',
        default: '迷你点阵显示模块，IIC接口'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnwoSasLD0h1zpR3RWwlSKYc',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    
});

module.exports = matrixScreen;
