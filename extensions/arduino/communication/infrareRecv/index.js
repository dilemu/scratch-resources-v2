const matrixScreen = formatMessage => ({
    name: "红外线接收模块",
    extensionId: 'DBitInfrareRecv',
    supportDevice: ['arduinoNano'],
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitInfrareRecv.description',
        default: '可接收标准38KHz调制的红外信号'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['communication'],
});

module.exports = matrixScreen;
