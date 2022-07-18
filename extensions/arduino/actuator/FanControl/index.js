const matrixScreen = formatMessage => ({
    name: "轴流式风扇",
    extensionId: 'DBitFanControl',
    version: '1.0.0',
    supportDevice: ['arduinoNano'],
    author: 'bjppss',
    iconURL: `asset/matrixScreen.png`,
    description: formatMessage({
        id: 'DBitFanControl.description',
        default: '轴流式风扇'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    msg: 'msg.js',
    library: 'lib',
    official: true,
    tags: ['motion'],
    helpLink: 'https://delightmom.com'
});

module.exports = matrixScreen;
