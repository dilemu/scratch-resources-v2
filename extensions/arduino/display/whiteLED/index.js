const matrixScreen = formatMessage => ({
    name: "纯白单色灯",
    extensionId: 'DBitWhiteLED',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitWhiteLED.description',
        default: '可控制单路点亮的白色LED'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnr7xNPpSdegS2BjJURayMqg',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
});

module.exports = matrixScreen;
