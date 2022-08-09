const matrixScreen = formatMessage => ({
    name: "旋钮电位器",
    extensionId: 'DBitRotary',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitRotary.description',
        default: '可调节电压，旋钮范围为0~1023'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnDNBFHZs0fAcQoIKUiyds6f',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['sensor'],
    
});

module.exports = matrixScreen;
