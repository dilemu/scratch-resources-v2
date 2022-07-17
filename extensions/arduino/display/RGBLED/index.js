const matrixScreen = formatMessage => ({
    name: "全彩彩灯快",
    extensionId: 'DBitRGBLED',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitRGBLED.description',
        default: '可以控制发出不同颜色的RGB光'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['display'],
    helpLink: 'https://delightmom.com'
});

module.exports = matrixScreen;
