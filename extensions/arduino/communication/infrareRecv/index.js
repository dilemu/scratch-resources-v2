const matrixScreen = formatMessage => ({
    name: "红外线接收模块",
    extensionId: 'DBitInfrareRecv',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitInfrareRecv.description',
        default: '可接收标准38KHz调制的红外信号'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnCi6VaS599WYCfca2sf9Bcf',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
});

module.exports = matrixScreen;
