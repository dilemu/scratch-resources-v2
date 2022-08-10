const matrixScreen = formatMessage => ({
    name: "红绿双色灯",
    extensionId: 'DBitRedAndFGreenLED',
    supportDevice: ['arduinoNano'],
    insetIconURL: `asset/small.png`,
    iconURL: `asset/large.png`,
    description: formatMessage({
        id: 'DBitRedAndFGreenLED.description',
        default: '可控制单路点亮和双路点亮的双色LED'
    }),
    featured: true,
    learnMore: 'https://delightmom.feishu.cn/wiki/wikcnp5dOegxSi7TFVoOtzTJwaf',
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
});

module.exports = matrixScreen;
