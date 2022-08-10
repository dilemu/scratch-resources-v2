const matrixScreen = formatMessage => ({
    name: "乐高兼容电机",
    extensionId: 'DBitMotor',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitMotor.description',
        default: '可控制正反转和调速的电机'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnlp8DdF70HOdtmzgmbsPBvg',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['motion'],
});

module.exports = matrixScreen;
